import moment from "moment";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: string[];
  Items: any[];
}
const MyPublicationsTable: React.FC<TableComponentProp & RouteComponentProps> =
  (props) => {
    console.log(props.Items);
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
                <td>{head.name}</td>
                <td>{head.category}</td>
                <td>{head.assignedUserFirstName}</td>
                <td>{moment(head.Deadline).format("YYYY/MM/DD")}</td>
                <td>
                  <div className="col d-flex justify-content-between align-items-center">
                   <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={() =>
                        props.history.push(
                          `${AppRoutes.publish_profile.replace(
                            ":id",
                            head.id?.toString()
                          )}`
                        )
                      }
                      className="pointer"
                    >
                      <img src="/images/icons/google_docs.svg" alt="radvix" width={12} height={12} />
                    </CircleIcon>
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) =>
                        props.history.push(
                          `${AppRoutes.equip_edit.replace(
                            ":id",
                            head.id?.toString() ?? ""
                          )}`
                        )
                      }
                      className="pointer"
                    >
                      <img src="/images/icons/edit.svg" alt="radvix" />
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
export default withRouter(MyPublicationsTable);
