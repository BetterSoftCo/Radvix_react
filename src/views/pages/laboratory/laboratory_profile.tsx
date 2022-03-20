import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { AccessPermition, Theme, UserRoles } from "../../../core/utils";
import { BoxListScroll } from "../../components/box_list_scroll";
import { withRouter, RouteComponentProps } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { LaboratoryController } from "../../../controllers/laboratory/laboratory_controller";
import { GetLaboratoryByIDResult } from "../../../data/models/responses/laboratory/laboratory_by_id_res";
interface RouteParams {
  id: string;
}
class LaboratoryPageProfile extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new LaboratoryController();
  state: GetLaboratoryByIDResult = {
    title: "",
    id: 0,
    categoryName: "",
    categoryId: 0,
    description: "",
    labManagers: [],
    webSite: "",
    addressLine1: "",
    addressLine2: "",
    zipCode: "",
    company: "",
    phone: "",
    countryId: 0,
    media: [],
    equipments: [],
    teams: [],
    members: [],
  };
  componentDidMount() {
    this.controller.getLaboratoryById(
      {
        id: parseInt(this.props.match.params.id),
      },
      (res) => {
        this.setState({
          title: res.title,
          id: res.id,
          categoryName: res.categoryName,
          labManagers: res.labManagers,
          webSite: res.webSite,
          media: res.media,
          equipments: res.equipments,
          teams: res.teams,
          members: res.members,
          addressLine1: res.addressLine1,
          addressLine2: res.addressLine2,
          description: res.description,
        });
      }
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
              {"Laboratory List > Lab Profile"}
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
                  className="mx-4 pointer"
                  onClick={() => {
                    this.props.history.push(
                      `${AppRoutes.edit_laboratory.replace(
                        ":id",
                        this.state.id?.toString()
                      )}`
                    );
                  }}
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
                    .replace(":topic", "5")
                    .replace(":section", "2")}`
                );
              }}
            ></MainButton>
          </div>
          <div className="Studying p-4 my-2">
            <h3 className="px-5 text-center">{this.state.title}</h3>
            <p>{this.state.description}</p>
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-4 t-title mb-0 border-t-l">Category</h6>
                <div className="col-8 t-desc border-t-r">
                  {this.state.categoryName}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Lab Manager(s)</h6>
                <div className="col-8 t-desc">
                  <ul>
                    {this.state.labManagers.map((item) => (
                      <li key={item.id}>
                        {item.firstName + " " + item.lastName}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Website</h6>
                <div
                  className="col-8 t-desc text-truncate"
                  title={this.state.webSite}
                >
                  <MainButton
                    children={this.state.webSite}
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="14px"
                    backgroundColor="#F5F5F5"
                    color="#096BFF"
                    className="col-8 text-truncate"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Address</h6>
                <div className="col-8 t-desc">
                  {this.state.addressLine1 + " - " + this.state.addressLine2}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">Protocols</h6>
                <div className="col-8 t-desc border-b-r">
                  {" "}
                  <ul className="file-list">
                    {this.state.media
                      .filter((item) => !item.externalUrl)
                      .map((item) => (
                        <li>
                          <img
                            src={`/images/icons/${item.inputDataType.isMedia()}`}
                            alt=""
                            width={20}
                            height={20}
                          />{" "}
                          {item.name}
                        </li>
                      ))}

                    <li>
                      Shared Links:
                      {this.state.media
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
              <div className="teams Labs mb-3 teams-light">
                <IconTextRow
                  theme={Theme.dark}
                  text="Labs (Equipments)"
                  children={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.91"
                      height="28.365"
                      viewBox="0 0 23.91 28.365"
                      className="mx-2"
                    >
                      <g
                        id="Lab_Menu_Icon"
                        data-name="Lab Menu Icon"
                        transform="translate(-40.206 0)"
                      >
                        <path
                          id="Path_19"
                          data-name="Path 19"
                          d="M100.284,6.467H98V4.628a.831.831,0,0,0-.831-.831H97.11V1.662h.059a.831.831,0,0,0,0-1.662H91.828a.831.831,0,0,0,0,1.662h.059V3.8h-.059A.831.831,0,0,0,91,4.628v8.9a.831.831,0,0,0,.831.831h5.341A.831.831,0,0,0,98,13.529V11.69h2.284a4.065,4.065,0,0,1,0,8.129H89.158a.831.831,0,0,0-.831.831v4.391h11.957a9.3,9.3,0,0,0,9.287-9.287h0a9.3,9.3,0,0,0-9.287-9.287ZM97.169,11.69A2.611,2.611,0,1,1,99.78,9.078,2.614,2.614,0,0,1,97.169,11.69Z"
                          transform="translate(-45.455)"
                          fill="#000000"
                        />
                        <path
                          id="Path_20"
                          data-name="Path 20"
                          d="M156.984,290.862a.831.831,0,0,0,.831-.831V289.2h-5.222v.831a.831.831,0,0,0,.831.831Z"
                          transform="translate(-106.161 -273.178)"
                          fill="#000000"
                        />
                        <path
                          id="Path_21"
                          data-name="Path 21"
                          d="M57.055,482H41.033a.831.831,0,0,0,0,1.662H57.055A.831.831,0,0,0,57.055,482Z"
                          transform="translate(0 -455.297)"
                          fill="#000000"
                        />
                        <path
                          id="Path_22"
                          data-name="Path 22"
                          d="M231.743,146.733a.949.949,0,1,0,.949.949A.95.95,0,0,0,231.743,146.733Z"
                          transform="translate(-180.029 -138.604)"
                          fill="#000000"
                        />
                      </g>
                    </svg>
                  }
                  className="mb-1"
                ></IconTextRow>
                <BoxListScroll
                  default_photo="/Images/icons/equipment_Icon.svg"
                  className="mt-3 pointer"
                  items={this.state.equipments}
                  TextItem="title"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  onClick={() => {
                    this.props.history.push(
                      `${AppRoutes.profile_laboratory.replace(
                        ":id",
                        this.state.id?.toString()
                      )}`
                    );
                  }}
                ></BoxListScroll>
              </div>
              <div className="teams mb-3 teams-light">
                <IconTextRow
                  theme={Theme.dark}
                  text="Teams (Members)"
                  children={
                    <img
                      src="/images/icons/team_menu.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                ></IconTextRow>
                <div className="tags p-3">
                  {this.state.teams.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        children={item.title}
                        type={MainButtonType.light}
                        borderRadius="24px"
                        fontSize="14px"
                        className="px-3 pointer"
                        backgroundColor="#EBEBEB"
                        onClick={() => {
                          this.props.history.push(
                            `${AppRoutes.team_profile.replace(
                              ":id",
                              item.id?.toString() ?? ""
                            )}`
                          );
                        }}
                      ></MainButton>
                    </div>
                  ))}
                </div>
                <BoxListScroll
                  default_photo="/Images/icons/user.svg"
                  items={this.state.members}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
                  className="pointer"
                  onClick={(e, value) => {
                    this.props.history.push(
                      `${AppRoutes.member_profile.replace(
                        ":id",
                        value.toString()
                      )}`
                    );
                  }}
                ></BoxListScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LaboratoryPageProfile);
