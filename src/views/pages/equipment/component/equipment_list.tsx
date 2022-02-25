import React from "react";
import { Theme } from "../../../../core/utils";
import { GetAllEquipmentResult } from "../../../../data/models/responses/equipment/get_all_equipment_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { IconTextRow } from "../../../components/icon_text_horizontal";
interface TableComponentProp {
  Heading: string[];
  Items: GetAllEquipmentResult[];
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
                      src="/images/images/img_avatar.png"
                      alt="Avatar"
                      className="rounded-circle avatar mx-2"
                      width={58}
                      height={58}
                    />
                  }
                  text={head.title}
                ></IconTextRow>
              </td>
              <td style={{ display: "table-cell", verticalAlign: "middle" }} className="align-items-center">{head.title}</td>
              <td style={{ display: "table-cell", verticalAlign: "middle" }} className="align-items-center">{head.title}</td>
              <td style={{ display: "table-cell", verticalAlign: "middle" }} className="align-items-center">
                <MainButton
                  children={head.title}
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
                    className="pointer"
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
