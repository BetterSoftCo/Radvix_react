import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { AccessPermition, Theme, UserRoles } from "../../../core/utils";
import { BoxListScroll } from "../../components/box_list_scroll";
import { RouteComponentProps, withRouter } from "react-router";
import { AppConstants, AppRoutes } from "../../../core/constants";
import { EquipmentController } from "../../../controllers/equipment/equipment_controller";
import { GetEquimentByIDResResult } from "../../../data/models/responses/equipment/get_equipment_by_id_res";
interface RouteParams {
  id: string;
}
class EquipProfile extends React.Component<RouteComponentProps<RouteParams>> {
  RoleUser = store.getState().userRole;
  controller = new EquipmentController();
  state: GetEquimentByIDResResult = {
    id: 0,
    title: "",
    image: "",
    status: 0,
    laboratories: [],
    manufacturer: "",
    model: "",
    technicianName: "",
    technicianEmail: "",
    technicianPhone: "",
    medias: [],
    teams: [],
    members: [],
    description: "",
  };
  componentDidMount() {
    this.controller.getEquipment(
      {
        equipmentId: parseInt(this.props.match.params.id),
      },
      (res) => {
        this.setState({
          id: res.id,
          title: res.title,
          manufacturer: res.manufacturer,
          model: res.model,
          technicianName: res.technicianName,
          technicianEmail: res.technicianEmail,
          technicianPhone: res.technicianPhone,
          status: res.status,
          medias: res.medias,
          laboratories: res.laboratories,
          teams: res.teams,
          members: res.members,
          description: res.description,
          image: res.image,
        });
      },
      (err) => {}
    );
  }
  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="b-title d-flex align-items-center">
              <span
                onClick={() => {
                  window.history.back();
                }}
                className="backPage"
              ></span>{" "}
              {"Equipment Profile"}
              {AccessPermition(this.RoleUser, [
                UserRoles.Admin,
                UserRoles.L1Client,
                UserRoles.L1User,
                UserRoles.L2User,
              ]) ? (
                <CircleIcon
                  width="22px"
                  height="22px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="#474747"
                  fontSize="10px"
                  color="#ffff"
                  onClick={() => {
                    this.props.history.push(
                      `${AppRoutes.equip_edit.replace(
                        ":id",
                        this.state.id?.toString() ?? ""
                      )}`
                    );
                  }}
                  className="mx-2 pointer"
                >
                  <img src="/images/icons/edit.svg" alt="radvix" />
                </CircleIcon>
              ) : null}
            </h5>
            <MainButton
                children="Discussion Panel"
                type={MainButtonType.dark}
                borderRadius="24px"
                fontSize="14px"
                className="px-3"
                onClick={() => {
                  this.props.history.push(
                    `${AppRoutes.discussion_new
                      .replace(":topic", "4")
                      .replace(":section", "3")}`
                  );
                }}
              ></MainButton>
          </div>
          <div className="Studying p-4 my-2 d-flex flex-column justify-content-center align-items-center">
            <img
              src={
                this.state.image
                  ? AppConstants.base_url_image + this.state.image
                  : "/Images/icons/equipment_Icon.svg"
              }
              alt="Avatar"
              className="rounded-circle avatar mb-2"
              width="125px"
              height="125px"
            />

            <h3 className="px-5 text-center">{this.state.title}</h3>
            <p>{this.state.description}</p>
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-5 t-title mb-0 border-t-l">Status</h6>
                <div className="col-7 t-desc border-t-r">
                  <MainButton
                    children={this.state.status.isStatus()}
                    type={MainButtonType.dark}
                    borderRadius="42px"
                    fontSize="11px"
                    backgroundColor="#006EA8"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Laboratory</h6>
                <div className="col-7 t-desc">
                  <ul className="px-0">
                    {this.state.laboratories.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Manufacturer (Model)</h6>
                <div className="col-7 t-desc">{this.state.model}</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Warranty (Support)</h6>
                <div className="col-7 t-desc">
                  {this.state.technicianName} {this.state.technicianEmail}{" "}
                  {this.state.technicianPhone}
                </div>
              </div>

              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0 border-b-l">Protocols</h6>
                <div className="col-7 t-desc border-b-r">
                  <ul className="file-list">
                    {this.state.medias
                      .filter((media) => media.externalUrl === null)
                      .map((item) => (
                        <li>
                          <img
                            src={`/images/icons/${item.inputDataType.isMedia()}`}
                            alt=""
                            width={20}
                            height={20}
                          />{" "}
                          {item.title}
                        </li>
                      ))}

                    <li>
                      Shared Links:
                      {this.state.medias
                        .filter((item) => item.externalUrl)
                        .map((item) => (
                          <div key={item.id}>
                            <MainButton
                              children={item.externalUrl}
                              type={MainButtonType.dark}
                              borderRadius="24px"
                              fontSize="14px"
                              backgroundColor="#F5F5F5"
                              color="#096BFF"
                            ></MainButton>
                          </div>
                        ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="teams mb-3 teams-light">
                <IconTextRow
                  theme={Theme.dark}
                  text="Teams (Members) With Access"
                  children={
                    <img
                      src="/images/icons/team_menu.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                  fontSize="12px"
                ></IconTextRow>
                <div className="tags p-3">
                  {this.state.teams.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        children={item.title}
                        type={MainButtonType.light}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#EBEBEB"
                      ></MainButton>
                    </div>
                  ))}
                </div>
                <BoxListScroll
                  default_photo="/Images/icons/equipment_Icon.svg"
                  items={this.state.members}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
                  Deletabel
                ></BoxListScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(EquipProfile);
