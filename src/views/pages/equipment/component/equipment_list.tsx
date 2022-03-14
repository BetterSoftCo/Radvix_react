import React from "react";
import { AccessPermition, Theme, UserRoles } from "../../../../core/utils";
import { Equipment } from "../../../../data/models/responses/equipment/get_all_equipment_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { IconTextRow } from "../../../components/icon_text_horizontal";
import { RouteComponentProps, withRouter } from "react-router";
import { AppConstants, AppRoutes } from "../../../../core/constants";
interface TableComponentProp {
  Heading: string[];
  Items: Equipment[];
  role: UserRoles;
}
const EquipmentList: React.FC<TableComponentProp & RouteComponentProps> = (
  props
) => {
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
              <td>
                <IconTextRow
                  theme={Theme.light}
                  children={
                    <img
                      src={
                        head.image
                          ? AppConstants.base_url_image + head.image
                          : "/images/icons/equipment_Icon.svg"
                      }
                      alt="Avatar"
                      className="rounded-circle avatar mx-2"
                      width={58}
                      height={58}
                    />
                  }
                  text={head.title}
                ></IconTextRow>
              </td>
              <td
                style={{ display: "table-cell", verticalAlign: "middle" }}
                className="align-items-center"
              >
                {head.laboratories.map((item) => item.title).join(" - ")}
              </td>
              <td
                style={{ display: "table-cell", verticalAlign: "middle" }}
                className="align-items-center"
              >
                {head.usersCount}
              </td>
              <td
                style={{ display: "table-cell", verticalAlign: "middle" }}
                className="align-items-center"
              >
                <MainButton
                  children={head.status.isStatus()}
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
                    onClick={(e) =>
                      props.history.push(
                        `${AppRoutes.equip_profile.replace(
                          ":id",
                          head.id?.toString() ?? ""
                        )}`
                      )
                    }
                    className="pointer mx-1"
                  >
                    <img
                      src="/images/icons/google_docs.svg"
                      alt="radvix"
                      width={12}
                      height={12}
                    />
                  </CircleIcon>
                  {head.allowedToEdit &&
                  AccessPermition(props.role, [
                    UserRoles.Admin,
                    UserRoles.L1Client,
                    UserRoles.L1User,
                    UserRoles.L2User,
                  ]) ? (
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) =>
                        props.history.push(
                          `${AppRoutes.equip_edit.replace(
                            ":id",
                            head.id?.toString() ?? ""
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
export default withRouter(EquipmentList);
