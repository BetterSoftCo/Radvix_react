import moment from "moment";
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
const MyTicketTable: React.FC<TableComponentProp & RouteComponentProps> = (
  props
) => {
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
              <td
                onClick={() => {
                  props.history.push(AppRoutes.ticketing_ticket);
                }}
              >
                {head.subject}
              </td>
              <td
                onClick={() => {
                  props.history.push(AppRoutes.ticketing_ticket);
                }}
              >
                {head.subject}
              </td>
              <td
                onClick={() => {
                  props.history.push(AppRoutes.ticketing_ticket);
                }}
              >
                {moment(head.histories[0].createDate).format("YYYY/MM/DD")}
              </td>
              <td>
                <MainButton
                  children={head.priority.isPriority()}
                  type={MainButtonType.light}
                  borderRadius="24px"
                  fontSize="14px"
                  backgroundColor="#D9D9D9"
                  onClick={() => {
                    props.history.push(AppRoutes.ticketing_ticket);
                  }}
                ></MainButton>
              </td>
              <td>
                <MainButton
                  children={head.priority.isPriority()}
                  type={MainButtonType.light}
                  borderRadius="24px"
                  fontSize="14px"
                  backgroundColor="#FFBA00"
                  onClick={() => {
                    props.history.push(AppRoutes.ticketing_ticket);
                  }}
                ></MainButton>
              </td>
              <td>
                <div className="col d-flex justify-content-between align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => {
                      props.history.push(
                        `${AppRoutes.ticketing_ticket.replace(
                          ":id",
                          head.id.toString() ?? ""
                        )}`
                      );
                    }}
                    className="pointer"
                  >
                    <img
                      src="/images/icons/start_discussion.svg"
                      alt="radvix"
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
export default withRouter(MyTicketTable);
