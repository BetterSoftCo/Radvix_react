/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState } from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { AppRoutes } from "../../core/constants";
import { Theme } from "../../core/utils";
import { CircleIcon, ThemeCircleIcon } from "../components/circle_icon";
import { IconTextVertical } from "../components/Icon_text_vertical";

const Sidebar: React.FC<RouteComponentProps> = (props) => {
  const [ShowSidebar, setShowSidebar] = useState(false);
  const [page, setPage] = useState("");
  const toggleSidebar = (pageType: string) => {
    setShowSidebar(!ShowSidebar);
    setPage(pageType);
    console.log(ShowSidebar);
  };
  return (
    <Fragment>
      <div className="parent-sidebar">
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
                  src="/Images/layout/research_icon.svg"
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
                  src="/Images/layout/lab_menu_icon.svg"
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
                  src="/Images/layout/team_menu_icon.svg
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
                  src="/Images/layout/task_menu_icon.svg"
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
                  src="/Images/layout/data_manu_Icon.svg"
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
                <img width="40px" height="40px" src="/Images/layout/chat.png" />
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
                  src="/Images/layout/publish_menu_icon.svg"
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
                  src="/Images/layout/expense_menu_icon.svg"
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
                    src="/Images/layout/setting_menu_icon.svg"
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
                    src="/Images/layout/headphones.svg"
                  />
                }
              ></IconTextVertical>
            </li>
          </NavLink>
        </ul>
      </div>
      {page === "Research" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div className="d-flex flex-wrap list-icons">
            <IconTextVertical
              fontSize="15px"
              className="lighter mx-2 my-1 pointer"
              text="New"
              onClick={() => {
                props.history.push(AppRoutes.new_research);
              }}
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              fontSize="15px"
              className="lighter mx-2 my-1 pointer"
              onClick={() => {
                props.history.push(AppRoutes.research);
              }}
              text="Research"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              fontSize="15px"
              className="lighter mx-2 my-1 pointer"
              text="Timeline"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
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
      ) : page === "Laboratory" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div
            className="d-flex flex-wrap list-icons"
            style={{ marginTop: "6rem" }}
          >
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.new_laboratory);
              }}
              fontSize="15px"
              className="lighter mx-2 my-1 pointer"
              text="New Lab"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.laboratory);
              }}
              fontSize="15px"
              className="lighter mx-2 my-1 pointer"
              text="Lab List"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.equip_new);
              }}
              fontSize="15px"
              className="lighter mx-2 my-1 pointer"
              text="New Equip"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.equip);
              }}
              fontSize="15px"
              className="lighter mx-2 my-1 pointer"
              text="Equip List"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
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
            className="d-flex flex-wrap list-icons px-0"
            style={{ marginTop: "10rem" }}
          >
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.new_team);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Add Team"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.team);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Teams List"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.member_new);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Invite Members"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.member);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Members"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
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
            className="d-flex flex-wrap list-icons px-0"
            style={{ marginTop: "14rem" }}
          >
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.task_new);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Add Task"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.task);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="List Task"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
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
      ) : page === "Data" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div
            className="d-flex flex-wrap list-icons px-0"
            style={{ marginTop: "19rem" }}
          >
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.data_new);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Add Data"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.data);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Data Archive"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
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
      ) : page === "Discussion" && ShowSidebar === true ? (
        <div className="gide-sidebar">
          <div
            className="d-flex flex-wrap list-icons px-0"
            style={{ marginTop: "24rem" }}
          >
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.discussion_new);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="New"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.discussion_list);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Inbox"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
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
          <div className="d-flex flex-wrap list-icons px-0">
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.publish_new);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Start a"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.publish);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Publication Archive"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
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
          <div className="d-flex flex-wrap list-icons px-0">
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.expense_new);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1 pointer"
              text="Add"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
                />
              }
            ></IconTextVertical>
            <IconTextVertical
              onClick={() => {
                props.history.push(AppRoutes.expense);
              }}
              fontSize="15px"
              className="lighter mx-1 my-1  pointer"
              text="Expense Archive"
              theme={Theme.light}
              children={
                <img
                  width="40px"
                  height="40px"
                  src="/Images/layout/new_task_icon.svg"
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
