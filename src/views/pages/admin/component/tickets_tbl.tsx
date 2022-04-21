import moment from "moment";
import React from "react";
import { Discussion } from "../../../../data/models/responses/discussion/get_all_discusstion_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface TableComponentProp {
  Heading: any[];
  Items: Discussion[];
}
export const TicketsTbl: React.FC<TableComponentProp> = ({
  Heading,
  Items,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead>
          <tr>
            {Heading.map((head, index) => (
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
          {Items.map((head, index) => (
            <tr key={index}>
              <td>{head.subject}</td>
              <td className="text-center">#{head.id}</td>
              <td className="text-center">
                {head.creatorUserFirstName + " " + head.creatorUserLastName}
              </td>
              <td className="text-center">
                {moment(head.histories[0].createDate).format("YYYY/MM/DD")}
              </td>
              <MainButton
                children={head.priority.isPriority()}
                type={MainButtonType.light}
                borderRadius="24px"
                fontSize="14px"
                backgroundColor="#D9D9D9"
                onClick={() => {}}
              ></MainButton>
              <MainButton
                children={head.priority.isPriority()}
                type={MainButtonType.light}
                borderRadius="24px"
                fontSize="14px"
                backgroundColor="#D9D9D9"
                onClick={() => {}}
              ></MainButton>
              <td>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => console.log("s")}
                    className="pointer mx-1"
                  >
                    <img
                      src="/images/icons/google_docs.svg"
                      alt="radvix"
                      width={12}
                      height={12}
                    />
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
