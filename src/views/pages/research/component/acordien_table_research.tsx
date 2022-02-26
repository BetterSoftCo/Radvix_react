import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { ResearchesList } from "../../../../data/models/responses/research/researches_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import "../../../../core/number_extentions";
import { AccessPermition, UserRoles } from "../../../../core/utils";
interface IAcordienTableResearch {
  Heading: any[];
  Items: ResearchesList[];
  role: UserRoles;
}
const AcordienTableResearch: React.FC<
  IAcordienTableResearch & RouteComponentProps
> = (props) => {
  console.log(props);

  useEffect(() => {}, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {props.Heading.map((head, index) => (
              <th
                scope="col"
                className={head.center ? "text-center" : ""}
                key={index}
              >
                {head.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.Items.map((head, index) => (
            <tr key={index}>
              <td>
                <span
                  className="lable"
                  style={{ backgroundColor: "rgb(9, 107, 255)" }}
                ></span>{" "}
                {head.title}
              </td>
              <td>{head.endDate}</td>
              <td className="text-center">
                {" "}
                <MainButton
                  children={head.status.isStatus()}
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  backgroundColor="#8EE1FF"
                ></MainButton>
              </td>
              <td>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={() => {
                      props.history.push(
                        `${AppRoutes.profile_research.replace(
                          ":id",
                          head.id?.toString() ?? ""
                        )}`
                      );
                    }}
                    className="pointer mx-1"
                  >
                    <img
                      src="/images/icons/google_docs.svg"
                      alt="radvix"
                      width={12}
                      height={12}
                    />
                  </CircleIcon>
                  {AccessPermition(props.role, [
                    UserRoles.Admin,
                    UserRoles.L1Client,
                    UserRoles.L2User,
                  ]) ? (
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={() => {
                        props.history.push(
                          `${AppRoutes.edit_research.replace(
                            ":id",
                            head.id?.toString() ?? ""
                          )}`
                        );
                      }}
                      className="pointer mx-1"
                    >
                      <img src="/images/icons/edit.svg" alt="radvix" />
                    </CircleIcon>
                  ) : null}

                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    color="#ffff"
                    className="pointer mx-1"
                    onClick={() => {
                      props.history.push(
                        `${AppRoutes.profile_research.replace(
                          ":id",
                          head.id?.toString() ?? ""
                        )}`
                      );
                    }}
                  >
                    <i className="fas fa-history"></i>
                  </CircleIcon>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default withRouter(AcordienTableResearch);
