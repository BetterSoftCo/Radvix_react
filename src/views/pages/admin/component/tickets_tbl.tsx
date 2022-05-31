import moment from "moment";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { Discussion } from "../../../../data/models/responses/discussion/get_all_discusstion_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: any[];
  Items: Discussion[];
}
const TicketsTbl: React.FC<TableComponentProp & RouteComponentProps> = (
  props
) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {props.Heading.map((head, index) => (
              <th
                scope="col"
                key={index}
                className={head.center ? "text-center" : ""}
              >
                {head.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.Items.map((head, index) => (
            <tr key={index}>
              <td>{head.subject}</td>
              <td className="text-center">#{head.id}</td>
              <td className="text-center">
                {head.creatorUserFirstName + " " + head.creatorUserLastName}
              </td>
              <td className="text-center">
                {moment(head.histories[0].createDate).format("YYYY/MM/DD")}
              </td>
              <td className="text-center">
                <MainButton
                  children={`${head.histories.length} massages`}
                  type={MainButtonType.light}
                  borderRadius="24px"
                  fontSize="14px"
                  backgroundColor="#D9D9D9"
                  onClick={() => {}}
                ></MainButton>
              </td>
              <td className="text-center">
                <MainButton
                  children={head.priority.isPriority()}
                  type={MainButtonType.light}
                  borderRadius="24px"
                  fontSize="14px"
                  backgroundColor="#D9D9D9"
                  onClick={() => {}}
                ></MainButton>
              </td>
              <td>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => {
                      props.history.push(
                        `${AppRoutes.admin_ticket.replace(
                          ":id",
                          head.id.toString() ?? ""
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default withRouter(TicketsTbl);
