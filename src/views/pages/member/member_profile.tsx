import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { AccessPermition, Theme, UserRoles } from "../../../core/utils";
import { BoxListScroll } from "../../components/box_list_scroll";
import { MemberController } from "../../../controllers/member/member_controller";
import { RouteComponentProps, withRouter } from "react-router";
import { GetMemberByIDResResult } from "../../../data/models/responses/member/get_member_by_id_res";
import moment from "moment";
import { AppConstants, AppRoutes } from "../../../core/constants";
import "../../../core/number_extentions";
import { LocalDataSources } from "../../../data/local_datasources";
interface RouteParams {
  id: string;
}
class MemberPageProfile extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new MemberController();
  local = new LocalDataSources()
  state: GetMemberByIDResResult = {
    profileImage: "",
    firstName: "",
    lastName: "",
    role: 0,
    teams: [],
    laboratories: [],
    equipments: [],
    researches: [],
    degree: 0,
    invitationSender: "",
    joinedDate: new Date(),
    addressLine1: "",
    addressLine2: "",
    userEmail: "",
    resume: "",
    socialMediaProfiles: [],
    id: "",
    major: "",
    zipCode: "",
    phoneNumber: ""
  };
  componentDidMount() {
    this.controller.getMember(
      {
        userId: this.props.match.params.id,
      },
      (res) => {
        this.setState({
          profileImage: res.profileImage,
          firstName: res.firstName,
          lastName: res.lastName,
          role: res.role,
          teams: res.teams,
          laboratories: res.laboratories,
          equipments: res.equipments,
          researches: res.researches,
          degree: res.degree,
          invitationSender: res.invitationSender,
          joinedDate: res.joinedDate,
          addressLine1: res.addressLine1,
          addressLine2: res.addressLine2,
          userEmail: res.userEmail,
          resume: res.resume,
          socialMediaProfiles: res.socialMediaProfiles,
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
              {"Member Profile"}
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
                  className="mx-4"
                >
                  <i className="fas fa-history"></i>
                </CircleIcon>
              ) : null}
            </h5>
            <div className="d-flex justify-content-around align-items-center w-25">
              <MainButton
                children="Contact Lisa"
                type={MainButtonType.dark}
                borderRadius="24px"
                fontSize="14px"
              ></MainButton>
              <MainButton
                children="Edit My Profile"
                type={MainButtonType.dark}
                borderRadius="24px"
                fontSize="14px"
                onClick={() => {
                  this.props.history.push(
                    `${AppRoutes.member_edit_profile.replace(
                      ":id",
                      this.local.getUserId() ?? ""
                    )}`
                  );
                }}
              ></MainButton>
            </div>
          </div>
          <div className="Studying p-4 my-2 d-flex flex-column justify-content-center align-items-center">
            <img
              src={
                this.state.profileImage
                  ? AppConstants.base_url_image + this.state.profileImage
                  : "/images/images/img_avatar.png"
              }
              alt="Avatar"
              className="rounded-circle avatar"
              width="125px"
              height="125px"
            />

            <h3 className="px-5 text-center">
              {this.state.firstName + " " + this.state.lastName}
            </h3>
            <p>{this.state.userEmail}</p>
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-5 t-title mb-0 border-t-l">Role</h6>
                <div className="col-7 t-desc border-t-r">
                  <MainButton
                    children={this.state.role.isRole()}
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="11px"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Academic Background</h6>
                <div className="col-7 t-desc">{this.state.resume}</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Reports to</h6>
                <div className="col-7 t-desc">
                  {this.state.invitationSender}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Joined Radvix</h6>
                <div className="col-7 t-desc">
                  {moment(this.state.joinedDate).format("YYYY/MM/DD")}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0 border-b-l">Contact</h6>
                <div className="col-7 t-desc border-b-r">
                  <ul>
                    {this.state.socialMediaProfiles.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0 border-b-l">Public Resume</h6>
                <div className="col-7 t-desc border-b-r">
                  <ul className="file-list">
                    <li>{this.state.resume}</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0 border-b-l">Links</h6>
                <div className="col-7 t-desc border-b-r">
                  <ul className="file-list">
                    <li>
                      <img
                        src="/images/images/linkedIn_logo_initials.png"
                        alt=""
                      />{" "}
                      <MainButton
                        children="https://drive.google.com/file/234234"
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#F5F5F5"
                        color="#096BFF"
                      ></MainButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="teams mb-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Subteams"
                  fontSize="12px"
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
                        backgroundColor="#EBEBEB"
                      ></MainButton>
                    </div>
                  ))}
                </div>
              </div>
              <div className="teams mb-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Projects"
                  children={
                    <img src="/images/icons/lamp.svg" className="mx-2" alt="" />
                  }
                  fontSize="12px"
                ></IconTextRow>
                <div className="tags p-3">
                  {this.state.researches.map((item) => (
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
              </div>
              <div className="teams mb-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Laboratory (Equipment)"
                  children={
                    <img
                      src="/images/icons/labs_equip.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                  fontSize="12px"
                ></IconTextRow>
                <div className="tags p-3">
                  {this.state.laboratories.map((item) => (
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
                  items={this.state.equipments}
                  TextItem="title"
                  ValueItem="id"
                  ImageItem="imagesrc"
                ></BoxListScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MemberPageProfile);
