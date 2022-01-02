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
                <td>{head.Institution}</td>
                <td>{head.Category}</td>
                <td>{head.Eqiups}</td>
                <td>
                  <div className="col d-flex justify-content-between align-items-center">
                   <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => {
                        props.history.push(AppRoutes.data_profile);
                      }}
                      className="pointer"
                    >
                      <img src="/images/pages/google_docs.svg" alt="radvix" width={15} height={15} />
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
