import React from "react";
import { Theme } from "../../../../core/utils";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { IconTextRow } from "../../../components/icon_text_horizontal";
interface TableComponentProp {
  Heading: string[];
  Items: any[];
}
export const EquipmentList: React.FC<TableComponentProp> = ({
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
              <td>
                <IconTextRow
                  theme={Theme.light}
                  children={
                    <img
                      src="/images/layout/img_avatar.png"
                      alt="Avatar"
                      className="rounded-circle avatar mx-2"
                      width={58}
                      height={58}
                    />
                  }
                  text={head.name}
                ></IconTextRow>
              </td>
              <td style={{ display: "table-cell", verticalAlign: "middle" }} className="align-items-center">{head.Institution}</td>
              <td style={{ display: "table-cell", verticalAlign: "middle" }} className="align-items-center">{head.Category}</td>
              <td style={{ display: "table-cell", verticalAlign: "middle" }} className="align-items-center">
                <MainButton
                  children={head.Eqiups}
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  backgroundColor="#006EA8"
                ></MainButton>
              </td>
              <td style={{ display: "table-cell", verticalAlign: "middle" }}>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => console.log("s")}
                    className="pointer mx-1"
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
                    onClick={(e) => console.log("sgdsa")}
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
