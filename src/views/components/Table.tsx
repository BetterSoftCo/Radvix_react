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
            {Heading.map((index,head) => (
              <th scope="col" key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Items.map((index,head) => (
            <tr key={index}>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
