import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { Laboratory } from "../../../../data/models/responses/laboratory/laboratory_get_all_res";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: any[];
  Items: Laboratory[];
}
const TableListLaboratory: React.FC<
  TableComponentProp & RouteComponentProps
> = (props) => {
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
              <td>{head.title}</td>
              <td className="text-center">{head.company}</td>
              <td className="text-center">{head.categoryTitle}</td>
              <td className="text-center">{head.equipmentsCount}</td>
              <td>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    className="pointer mx-1"
                    onClick={() =>
                      props.history.push(
                        `${AppRoutes.profile_laboratory.replace(
                          ":id",
                          head.id?.toString()
                        )}`
                      )
                    }
                  >
                    <img
                      src="/images/icons/google_docs.svg"
                      alt="radvix"
                      width={12}
                      height={12}
                    />
                  </CircleIcon>
                  {head.allowedToEdit ? (
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={() =>
                        props.history.push(
                          `${AppRoutes.edit_laboratory.replace(
                            ":id",
                            head.id?.toString()
                          )}`
                        )
                      }
                      className="pointer"
                    >
                      <img src="/images/icons/edit.svg" alt="radvix" />
                    </CircleIcon>
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default withRouter(TableListLaboratory);
