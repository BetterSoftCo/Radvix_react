import React from "react";
interface TableComponentProp {
  Heading: string[];
  Items: any[];
}
export const TableComponent: React.FC<TableComponentProp> = ({
  Heading,
  Items,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {Heading.map((head) => (
              <th scope="col">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Items.map((head) => (
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
