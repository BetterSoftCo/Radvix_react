import moment from "moment";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { ResearchesList } from "../../../../data/models/responses/research/researches_res";
interface TableComponentProp {
  Heading: string[];
  Items: ResearchesList[];
}
const TableComponent: React.FC<TableComponentProp & RouteComponentProps> = (
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
                className={index === 1 ? "text-center" : ""}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.Items.map((head, index) => (
            <tr key={index}>
              <td>
                New Project{" "}
                <span
                  onClick={() => {
                    props.history.push(
                      `${AppRoutes.profile_research.replace(
                        ":id",
                        head.id?.toString() ?? ""
                      )}`
                    );
                  }}
                  className="pointer"
                >
                  "{head.title}”
                </span>{" "}
                Has Been Created By{" "}
                <span
                  className="pointer"
                  onClick={() => {
                    props.history.push(AppRoutes.member_profile);
                  }}
                >
                  {head.creatorUserFirstName + " " + head.creatorUserLastName}
                </span>
              </td>
              <td className="text-center"> {moment(head.startDate).format("YYYY/MM/DD")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default withRouter(TableComponent);
