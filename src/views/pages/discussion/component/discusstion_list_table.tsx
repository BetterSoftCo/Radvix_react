import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { Discussion } from "../../../../data/models/responses/discussion/get_all_discusstion_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: string[];
  Items: Discussion[];
}
const DiscusstionListTable: React.FC<
  TableComponentProp & RouteComponentProps
> = (props) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {props.Heading.map((head, index) => (
              <th scope="col" key={index}>
                {head}
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
                {head.subject}
              </td>
              <td>{head.topic.isTopic()}</td>
              <td>
                {" "}
                <MainButton
                  children={head.priority.isPriority()}
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
                        `${AppRoutes.discussion.replace(
                          ":id",
                          head.id.toString() ?? ""
                        )}`
                      );
                    }}
                    className="pointer"
                  >
                    <img
                      src="/images/icons/google_docs.svg"
                      alt="radvix"
                      width={12}
                      height={12}
                    />
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
export default withRouter(DiscusstionListTable);
