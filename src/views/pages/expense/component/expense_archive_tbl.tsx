import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: string[];
  Items: any[];
}
const ExpenseArchiveTable: React.FC<TableComponentProp & RouteComponentProps> =
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
                <td>{head.Receipt}</td>
                <td>
                  {" "}
                  <MainButton
                    children={head.status}
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="14px"
                    backgroundColor="#8EE1FF"
                  ></MainButton>
                </td>
                <td>
                  <div className="col d-flex justify-content-between align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={() => {
                        props.history.push(AppRoutes.expense);
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
export default withRouter(ExpenseArchiveTable);
