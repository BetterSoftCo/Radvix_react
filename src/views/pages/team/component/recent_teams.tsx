import React, { Fragment, useEffect } from "react";
import { UserRoles } from "../../../../core/utils";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { Team } from "../../../../data/models/responses/team/get_all_teams_res";
interface IAcordienTable {
  role: UserRoles;
  Teams: Team[];
}
const AcordienTable: React.FC<IAcordienTable & RouteComponentProps> = (
  props
) => {
  const handelOnclick = (e: any) => {
    e.stopPropagation();
    props.history.push(AppRoutes.new_team);
  };
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="row px-3">
        <div className="col"> Team Name</div>
        <div className="col">Created By</div>
        <div className="col text-center"> Members </div>
        <div className="col text-center"> Type </div>
        <div className="col"></div>
      </div>
      <div className="accordion" id="accordionExample">
        {props.Teams.map((item, index) => (
          <div className="accordion-item accordion-item-top" key={index}>
            <div className="accordion-header" id={`heading_resentTeam${index}`}>
              <div
                className="accordion-button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target={`#collapse_resentTeam${index}`}
                aria-controls={`collapse_resentTeam${index}`}
              >
                <div className="row w-100  ">
                  <div className="col">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                      ></span>{" "}
                      {item.title}
                    </span>
                  </div>
                  <div className="col text-truncate">
                    {item.creatorUserFirstName + " " + item.creatorUserLastName}
                  </div>
                  <div className="col text-center">{item.memberCount}</div>

                  <div className="col text-center">
                    <MainButton
                      type={MainButtonType.dark}
                      children="Main Team"
                      borderRadius="15px"
                      backgroundColor="#C3C3C3"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={() => props.history.push(`${AppRoutes.team_profile.replace(
                        ":id",
                        item.id.toString()
                      )}`)}
                      className="pointer m-1"
                    >
                      <img
                        src="/images/icons/google_docs.svg"
                        alt="radvix"
                        width={12}
                        height={12}
                      />
                    </CircleIcon>
                    {props.role !== UserRoles.L3User ? (
                      <CircleIcon
                        width="26px"
                        height="26px"
                        type={ThemeCircleIcon.dark}
                        onClick={() => props.history.push(`${AppRoutes.team_edit.replace(":id", item.id.toString() ?? "")}`)}
                        className="pointer m-1"
                      >
                        <img src="/images/icons/edit.svg" alt="radvix" />
                      </CircleIcon>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            {item.subTeams.length ? (
              <div
                id={`collapse_resentTeam${index}`}
                aria-labelledby={`heading_resentTeam${index}`}
                className="accordion-collapse collapse "
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ">
                  <div className="sub-accordian-parent">
                    <p
                      className="sub-accordion"
                      style={{ marginRight: "-7px" }}
                    >
                      Subteam
                    </p>
                  </div>
                  <div className="items">
                    {item.subTeams.map((sub, index) => (
                      <div className="row w-100 py-2 rounded" key={index}>
                        <div className="col">
                          <span
                            className="text-truncate d-inline-block"
                            style={{ maxWidth: "120px" }}
                          >
                            <span
                              className="lable"
                              style={{ backgroundColor: "#096BFF" }}
                            ></span>{" "}
                            {sub.title}
                          </span>
                        </div>
                        <div className="col text-truncate">
                          {sub.creatorFirstName + " " + sub.creatorLastName}
                        </div>
                        <div className="col text-center">{sub.memberCount}</div>

                        <div className="col">
                          <MainButton
                            type={MainButtonType.dark}
                            children="Subteam"
                            borderRadius="15px"
                            backgroundColor="#E3E3E3"
                            color="#474747"
                          ></MainButton>
                        </div>
                        <div className="col d-flex justify-content-end align-items-center">
                          <CircleIcon
                            width="26px"
                            height="26px"
                            type={ThemeCircleIcon.dark}
                            onClick={(e) => handelOnclick(e)}
                            className="pointer  m-1"
                          >
                            <img
                              src="/images/icons/google_docs.svg"
                              alt="radvix"
                              width={12}
                              height={12}
                            />
                          </CircleIcon>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default withRouter(AcordienTable);
