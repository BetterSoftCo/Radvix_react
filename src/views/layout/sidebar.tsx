/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState } from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { AppRoutes } from "../../core/constants";
import { AccessPermition, Theme, UserRoles } from "../../core/utils";
import { store } from "../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../components/circle_icon";
import { IconTextVertical } from "../components/Icon_text_vertical";

const Sidebar: React.FC<RouteComponentProps> = (props) => {
  const [ShowSidebar, setShowSidebar] = useState(false);
  const [page, setPage] = useState("");
  const toggleSidebar = (pageType: string) => {
    setShowSidebar(!ShowSidebar);
    setPage(pageType);
  };
  const RoleUser = store.getState().userRole;
  return (
    <Fragment>
      <div className="parent-sidebar">
        {props.location.pathname.search("/Admin") >= 0 ? (
          <ul>
            <NavLink to={AppRoutes.admin_member} activeClassName="selected">
              <li>
                <IconTextVertical
                  fontSize="15px"
                  className="lighter"
                  text="Users"
                  theme={Theme.dark}
                  children={
                    <img
                      width="40px"
                      height="40px"
                      src="/images/icons/user_list_admin.svg"
                    />
                  }
                ></IconTextVertical>
              </li>
            </NavLink>
            <NavLink to={AppRoutes.admin_payments} activeClassName="selected">
              <li>
                <IconTextVertical
                  fontSize="15px"
                  className="lighter"
                  text="Payments"
                  theme={Theme.dark}
                  children={
                    <img
                      width="40px"
                      height="40px"
                      src="/images/icons/expense_menu_icon_admin.svg"
                    />
                  }
                ></IconTextVertical>
              </li>
            </NavLink>
            <NavLink to={AppRoutes.admin_tickets} activeClassName="selected">
              <li>
                <IconTextVertical
                  fontSize="15px"
                  className="lighter"
                  text="Ticketing"
                  theme={Theme.dark}
                  children={
                    <img
                      width="40px"
                      height="40px"
                      src="/images/icons/headphones.svg"
                    />
                  }
                ></IconTextVertical>
              </li>
            </NavLink>
          </ul>
        ) : (
          <ul>
            <li
              onClick={() => {
                toggleSidebar("Research");
              }}
            >
              <IconTextVertical
                fontSize="15px"
                className="lighter pointer"
                text="Research"
                theme={Theme.dark}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/research_icon.svg"
                  />
                }
              ></IconTextVertical>
            </li>

            <li
              onClick={() => {
                toggleSidebar("Laboratory");
              }}
            >
              <IconTextVertical
                fontSize="15px"
                className="lighter pointer"
                text="Laboratory"
                theme={Theme.dark}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/lab_menu_icon.svg"
                  />
                }
              ></IconTextVertical>
            </li>

            <li
              onClick={() => {
                toggleSidebar("Team");
              }}
            >
              <IconTextVertical
                fontSize="15px"
                className="lighter pointer"
                text="Team"
                theme={Theme.dark}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/team_menu_icon.svg
            "
                  />
                }
              ></IconTextVertical>
            </li>

            <li
              onClick={() => {
                toggleSidebar("Task");
              }}
            >
              <IconTextVertical
                fontSize="15px"
                className="lighter pointer"
                text="Task"
                theme={Theme.dark}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/task_menu_icon.svg"
                  />
                }
              ></IconTextVertical>
            </li>

            <li
              onClick={() => {
                toggleSidebar("Data");
              }}
            >
              <IconTextVertical
                fontSize="15px"
                className="lighter pointer"
                text="Data"
                theme={Theme.dark}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/Images/icons/data_manu_Icon.svg"
                  />
                }
              ></IconTextVertical>
            </li>

            <li
              onClick={() => {
                toggleSidebar("Discussion");
              }}
            >
              <IconTextVertical
                fontSize="15px"
                className="lighter pointer"
                text="Discussion"
                theme={Theme.dark}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/Images/icons/chat.png"
                  />
                }
              ></IconTextVertical>
            </li>

            <li
              onClick={() => {
                toggleSidebar("Publish");
              }}
            >
              <IconTextVertical
                fontSize="15px"
                className="lighter pointer"
                text="Publish"
                theme={Theme.dark}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/publish_menu_icon.svg"
                  />
                }
              ></IconTextVertical>
            </li>
            <li
              onClick={() => {
                toggleSidebar("Expense");
              }}
            >
              <IconTextVertical
                fontSize="15px"
                className="lighter pointer"
                text="Expense"
                theme={Theme.dark}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/expense_menu_icon.svg"
                  />
                }
              ></IconTextVertical>
            </li>
            <NavLink to="/dashboard/Setting" activeClassName="selected">
              <li>
                <IconTextVertical
                  fontSize="15px"
                  className="lighter"
                  text="Setting"
                  theme={Theme.dark}
                  children={
                    <img
                      width="40px"
                      height="40px"
                      src="/images/icons/setting_menu_icon.svg"
                    />
                  }
                ></IconTextVertical>
              </li>
            </NavLink>
            <NavLink to="/dashboard/Ticketing" activeClassName="selected">
              <li>
                <IconTextVertical
                  fontSize="15px"
                  className="lighter"
                  text="Ticketing"
                  theme={Theme.dark}
                  children={
                    <img
                      width="40px"
                      height="40px"
                      src="/images/icons/headphones.svg"
                    />
                  }
                ></IconTextVertical>
              </li>
            </NavLink>
          </ul>
        )}
      </div>
      {page === "Research" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div className="d-flex flex-wrap list-icons justify-content-between">
            {AccessPermition(RoleUser, [
              UserRoles.Admin,
              UserRoles.L1Client,
              UserRoles.L1User,
            ]) ? (
              <IconTextVertical
                fontSize="15px"
                className="lighter mx-2 my-1 pointer"
                text="New"
                onClick={() => {
                  props.history.push(AppRoutes.new_research);
                  setShowSidebar(!ShowSidebar);
                }}
                theme={Theme.light}
                children={
                  <img width="40px" height="40px" src="/Images/icons/add.svg" />
                }
              ></IconTextVertical>
            ) : null}

            <IconTextVertical
              fontSize="15px"
              className="lighter mx-2 my-1 pointer"
              onClick={() => {
                props.history.push(AppRoutes.research);
                setShowSidebar(!ShowSidebar);
              }}
              text="Research"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/icons/archives.svg"
                />
              }
            ></IconTextVertical>
            {AccessPermition(RoleUser, [
              UserRoles.Admin,
              UserRoles.L1Client,
              UserRoles.L1User,
              UserRoles.L2User,
            ]) ? (
              <IconTextVertical
                fontSize="15px"
                className="lighter mx-2 my-1 pointer"
                text="Timeline"
                theme={Theme.light}
                onClick={() => {
                  props.history.push(AppRoutes.timeline_research);
                  setShowSidebar(!ShowSidebar);
                }}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/timeline.svg"
                  />
                }
              ></IconTextVertical>
            ) : null}
          </div>
          <div className="d-flex flex-column text-center align-items-center helptext">
            <CircleIcon
              width="20px"
              height="20px"
              type={ThemeCircleIcon.dark}
              backgroundColor="transparent"
              border="1px solid #D5D5D5"
              fontSize="10px"
              color="#D5D5D5"
              className="my-2"
            >
              <i className="fas fa-question pointer"></i>
            </CircleIcon>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
          </div>
        </div>
      ) : page === "Laboratory" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div
            className="d-flex flex-wrap list-icons justify-content-between"
            style={{ marginTop: "6rem" }}
          >
            {AccessPermition(RoleUser, [
              UserRoles.Admin,
              UserRoles.L1Client,
              UserRoles.L1User,
              UserRoles.L2User,
            ]) ? (
              <IconTextVertical
                onClick={() => {
                  props.history.push(AppRoutes.new_laboratory);
                  setShowSidebar(!ShowSidebar);
                }}
                fontSize="15px"
                className="lighter mx-2 my-1 pointer"
                text="New Lab"
                theme={Theme.light}
                children={
                  <img width="40px" height="40px" src="/Images/icons/add.svg" />
                }
              ></IconTextVertical>
            ) : null}

            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.laboratory);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-2 my-1 pointer"
              text="Lab List"
              theme={Theme.light}
              children={
                <img width="40px" height="40px" src="/images/icons/hotel.svg" />
              }
            ></IconTextVertical>
            {AccessPermition(RoleUser, [
              UserRoles.Admin,
              UserRoles.L1Client,
              UserRoles.L1User,
              UserRoles.L2User,
            ]) ? (
              <IconTextVertical
                onClick={() => {
                  props.history.push(AppRoutes.equip_new);
                  setShowSidebar(!ShowSidebar);
                }}
                fontSize="15px"
                className="lighter mx-2 my-1 pointer"
                text="New Equip"
                theme={Theme.light}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/microscope_1.svg"
                  />
                }
              ></IconTextVertical>
            ) : null}

            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.equip);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-2 my-1 pointer"
              text="Equip List"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/images/icons/laboratory.svg"
                />
              }
            ></IconTextVertical>
          </div>
          <div className="d-flex flex-column text-center align-items-center helptext">
            <CircleIcon
              width="20px"
              height="20px"
              type={ThemeCircleIcon.dark}
              backgroundColor="transparent"
              border="1px solid #D5D5D5"
              fontSize="10px"
              color="#D5D5D5"
              className="my-2"
            >
              <i className="fas fa-question pointer"></i>
            </CircleIcon>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
          </div>
        </div>
      ) : page === "Team" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div
            className="d-flex flex-wrap list-icons px-0 justify-content-around"
            style={{ marginTop: "10rem" }}
          >
            {AccessPermition(RoleUser, [
              UserRoles.Admin,
              UserRoles.L1Client,
              UserRoles.L1User,
              UserRoles.L2User,
            ]) ? (
              <IconTextVertical
                onClick={() => {
                  props.history.push(AppRoutes.new_team);
                }}
                fontSize="15px"
                className="lighter mx-1 my-1 pointer"
                text={
                  AccessPermition(RoleUser, [
                    UserRoles.Admin,
                    UserRoles.L1Client,
                    UserRoles.L1User,
                  ])
                    ? "Add Team"
                    : "Add"
                }
                theme={Theme.light}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/teamwork.svg"
                  />
                }
              ></IconTextVertical>
            ) : null}

            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.team);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Teams List"
              theme={Theme.light}
              children={
                <img width="40px" height="40px" src="/images/icons/tasks.svg" />
              }
            ></IconTextVertical>
            {AccessPermition(RoleUser, [
              UserRoles.Admin,
              UserRoles.L1Client,
              UserRoles.L1User,
              UserRoles.L2User,
            ]) ? (
              <IconTextVertical
                onClick={() => {
                  props.history.push(AppRoutes.member_new);
                  setShowSidebar(!ShowSidebar);
                }}
                fontSize="15px"
                className="lighter mx-1 my-1 pointer text-center"
                text={
                  <span>
                    Invite <br /> Members
                  </span>
                }
                theme={Theme.light}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/scientist.svg"
                  />
                }
              ></IconTextVertical>
            ) : null}

            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.member);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Members"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/images/icons/user_list.svg"
                />
              }
            ></IconTextVertical>
          </div>
          <div className="d-flex flex-column text-center align-items-center helptext">
            <CircleIcon
              width="20px"
              height="20px"
              type={ThemeCircleIcon.dark}
              backgroundColor="transparent"
              border="1px solid #D5D5D5"
              fontSize="10px"
              color="#D5D5D5"
              className="my-2"
            >
              <i className="fas fa-question pointer"></i>
            </CircleIcon>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
          </div>
        </div>
      ) : page === "Task" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div
            className="d-flex flex-wrap list-icons px-0 justify-content-around"
            style={{ marginTop: "14rem" }}
          >
            {AccessPermition(RoleUser, [
              UserRoles.Admin,
              UserRoles.L1Client,
              UserRoles.L1User,
              UserRoles.L2User,
            ]) ? (
              <IconTextVertical
                onClick={() => {
                  props.history.push(AppRoutes.task_new);
                  setShowSidebar(!ShowSidebar);
                }}
                fontSize="15px"
                className="lighter mx-1 my-1 pointer"
                text="Add Task"
                theme={Theme.light}
                children={
                  <img
                    width="40px"
                    height="40px"
                    src="/images/icons/task.svg"
                  />
                }
              ></IconTextVertical>
            ) : null}

            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.task);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="List Task"
              theme={Theme.light}
              children={
                <img width="40px" height="40px" src="/Images/icons/check.svg" />
              }
            ></IconTextVertical>
          </div>
          <div className="d-flex flex-column text-center align-items-center helptext">
            <CircleIcon
              width="20px"
              height="20px"
              type={ThemeCircleIcon.dark}
              backgroundColor="transparent"
              border="1px solid #D5D5D5"
              fontSize="10px"
              color="#D5D5D5"
              className="my-2"
            >
              <i className="fas fa-question pointer"></i>
            </CircleIcon>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
          </div>
        </div>
      ) : page === "Data" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div
            className="d-flex flex-wrap list-icons px-0 justify-content-around"
            style={{ marginTop: "19rem" }}
          >
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.data_new);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Add Data"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/icons/dashboard.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.data);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Data Archive"
              theme={Theme.light}
              children={
                <img width="40px" height="40px" src="/images/icons/inbox.svg" />
              }
            ></IconTextVertical>
          </div>
          <div className="d-flex flex-column text-center align-items-center helptext">
            <CircleIcon
              width="20px"
              height="20px"
              type={ThemeCircleIcon.dark}
              backgroundColor="transparent"
              border="1px solid #D5D5D5"
              fontSize="10px"
              color="#D5D5D5"
              className="my-2"
            >
              <i className="fas fa-question pointer"></i>
            </CircleIcon>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
          </div>
        </div>
      ) : page === "Discussion" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div
            className="d-flex flex-wrap list-icons px-0 justify-content-around"
            style={{ marginTop: "24rem" }}
          >
            <IconTextVertical
              onClick={() => {
                props.history.push(
                  `${AppRoutes.discussion_new.replace(":topic", "1")}`
                );
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="New"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/icons/chat_3.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.discussion_list);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Inbox"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/icons/businessmen.svg"
                />
              }
            ></IconTextVertical>
          </div>
          <div className="d-flex flex-column text-center align-items-center helptext">
            <CircleIcon
              width="20px"
              height="20px"
              type={ThemeCircleIcon.dark}
              backgroundColor="transparent"
              border="1px solid #D5D5D5"
              fontSize="10px"
              color="#D5D5D5"
              className="my-2"
            >
              <i className="fas fa-question pointer"></i>
            </CircleIcon>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
          </div>
        </div>
      ) : page === "Publish" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div
            style={{ marginTop: "8rem" }}
            className="d-flex flex-column text-center align-items-center helptext justify-content-around"
          >
            <CircleIcon
              width="20px"
              height="20px"
              type={ThemeCircleIcon.dark}
              backgroundColor="transparent"
              border="1px solid #D5D5D5"
              fontSize="10px"
              color="#D5D5D5"
              className="my-2"
            >
              <i className="fas fa-question pointer"></i>
            </CircleIcon>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
          </div>
          <div className="d-flex flex-wrap list-icons px-0 justify-content-around">
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.publish_new);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Start a"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/images/icons/notebook.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.publish);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer text-center"
              text={
                <span>
                  Publication <br /> Archive
                </span>
              }
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/images/icons/newspaper.svg"
                />
              }
            ></IconTextVertical>
          </div>
        </div>
      ) : page === "Expense" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div
            style={{ marginTop: "13rem" }}
            className="d-flex flex-column text-center align-items-center helptext"
          >
            <CircleIcon
              width="20px"
              height="20px"
              type={ThemeCircleIcon.dark}
              backgroundColor="transparent"
              border="1px solid #D5D5D5"
              fontSize="10px"
              color="#D5D5D5"
              className="my-2"
            >
              <i className="fas fa-question pointer"></i>
            </CircleIcon>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur impedit cum! Porro voluptatibus eveniet perspiciatis
              eligendi dolore sapiente, a facere nulla quae tempora sed amet
              alias odit vitae ut?
            </p>
          </div>
          <div className="d-flex flex-wrap list-icons px-0 justify-content-around">
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.expense_new);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Add"
              theme={Theme.light}
              children={
                <img width="40px" height="40px" src="/Images/icons/bill.svg" />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.expense);
                setShowSidebar(!ShowSidebar);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1  pointer text-center"
              text={
                <span>
                  Expense <br /> Archive
                </span>
              }
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/icons/accounting.svg"
                />
              }
            ></IconTextVertical>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
export default withRouter(Sidebar);
