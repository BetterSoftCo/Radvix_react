import moment from "moment";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppConstants, AppRoutes } from "../../../../core/constants";
import { Theme } from "../../../../core/utils";
import { UserClients } from "../../../../data/models/responses/admin/clients_res";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { IconTextRow } from "../../../components/icon_text_horizontal";
interface TableComponentProp {
  Heading: { name: string; center: boolean }[];
  Items: UserClients[];
}
const RadvixClients: React.FC<TableComponentProp & RouteComponentProps> = (
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
              <td>
                {" "}
                <IconTextRow
                  theme={Theme.light}
                  children={
                    <img
                      src={
                        head.profileImage
                          ? AppConstants.base_url_image + head.profileImage
                          : "/images/icons/user.svg"
                      }
                      alt="Avatar"
                      className="rounded-circle avatar mx-2"
                      width={58}
                      height={58}
                    />
                  }
                  text={head.firstName + " " + head.lastName}
                ></IconTextRow>
              </td>
              <td
                className="text-center"
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                {head.institution}
              </td>
              <td
                className="text-center"
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                {moment(head.joinedDate).format("YYYY/MM/DD")}
              </td>
              <td
                className="text-center"
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                {head.subscription}
              </td>
              <td
                className="text-center"
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                {head.totalMembers}
              </td>
              <td
                className="text-center"
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                {head.totalProjects}
              </td>
              <td
                className="text-center"
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                {head.storageUsage}
              </td>
              <td style={{ display: "table-cell", verticalAlign: "middle" }}>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={() => {
                      props.history.push(
                        `${AppRoutes.admin_member.replace(
                          ":id",
                          head.id?.toString()+`?name=${head.firstName+head.lastName}` 
                        )}`
                      );
                    }}
                    className="pointer mx-2"
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
export default withRouter(RadvixClients);
