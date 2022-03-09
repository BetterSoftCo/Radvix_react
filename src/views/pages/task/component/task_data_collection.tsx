import moment from "moment";
import React from "react";
import { Data } from "../../../../data/models/responses/task/get_task_by_id_res";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: string[];
  Items: Data[];
}
export const TaskDataCollection: React.FC<TableComponentProp> = ({
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
              <td>{head.title}</td>
              <td>{head.medias.map(item => item.title).join(' - ')}</td>
              <td>{head.creatorFirstName + ' ' + head.creatorLastName}</td>
              <td>{moment(head.createdDate).format("YYYY/MM/DD")}</td>
              <td>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => console.log("s")}
                    className="pointer mx-1"
                  >
                    <img src="/images/icons/google_docs.svg" alt="radvix" width={12} height={12} />
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => console.log("sgdsa")}
                    className="pointer mx-1"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => console.log("sgdsa")}
                    className="pointer mx-1"
                  >
                    <img src="/images/icons/start_discussion.svg" alt="radvix" />
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
