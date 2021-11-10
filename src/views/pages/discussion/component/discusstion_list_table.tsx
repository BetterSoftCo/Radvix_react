import React from "react";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: string[];
  Items: any[];
}
export const DiscusstionListTable: React.FC<TableComponentProp> = ({
  Heading,
  Items,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {Heading.map((head, index) => (
              <th scope="col" key={index}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Items.map((head, index) => (
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
                    onClick={(e) => console.log("s")}
                    className="pointer"
                  >
                    <i className="fas fa-file-alt"></i>
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => console.log("sgdsa")}
                    className="pointer"
                  >
                    <i className="fas fa-edit"></i>
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
