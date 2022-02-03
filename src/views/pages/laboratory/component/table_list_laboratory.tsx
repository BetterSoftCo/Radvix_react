import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: any[];
  Items: any[];
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
              <td>{head.name}</td>
              <td className="text-center">{head.Institution}</td>
              <td className="text-center">{head.Category}</td>
              <td className="text-center">{head.Eqiups}</td>
              <td>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    className="pointer mx-1"
                    onClick={() =>
                      props.history.push(AppRoutes.profile_laboratory)
                    }
                  >
                    <img
                      src="/images/pages/google_docs.svg"
                      alt="radvix"
                      width={12}
                      height={12}
                    />
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={() =>
                      props.history.push(AppRoutes.edit_laboratory)
                    }
                    className="pointer"
                  >
                    <img src="/images/pages/edit.svg" alt="radvix" />
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
export default withRouter(TableListLaboratory);
