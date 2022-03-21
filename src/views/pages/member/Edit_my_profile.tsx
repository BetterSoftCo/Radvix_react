import React, { Fragment } from "react";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import Dropzone from "react-dropzone";
import { UserController } from "../../../controllers/user/user_controller";
import { MemberController } from "../../../controllers/member/member_controller";
import { LocalDataSources } from "../../../data/local_datasources";
import { AppConstants } from "../../../core/constants";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import { UpdateMyProfileReq } from "../../../data/models/requests/user/update_myprofile_req";
import countries from "../../../core/json/countries.json";

type StateType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  degree: number;
  major: string;
  phoneNumber: string;
  institution: string;
  addressLine1: string;
  addressLine2: string;
  locationId: number;
  zipCode: string;
  token: string;
  role: number;
  profileImage: string;
  files: Array<File>;
  picture: Array<File>;
  loading: boolean;
  cahngePic: boolean;
  ExternalUrl: Array<string>;
  External: string;
  listDegree: Array<{ value: number; label: string }>;
  socialMediaProfiles: Array<{ value: number; label: string }>;
  listCountry: Array<{ label: string; value: number } | {}>;
};
export class EditMyProfile extends React.Component {
  RoleUser = store.getState().userRole;
  controller = new UserController();
  controllerMember = new MemberController();
  UploadController = new UploadController();
  local = new LocalDataSources();
  state: StateType = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    degree: 0,
    major: "",
    phoneNumber: "",
    institution: "",
    addressLine1: "",
    addressLine2: "",
    locationId: 0,
    zipCode: "",
    token: "",
    role: this.RoleUser,
    files: [],
    listDegree: [],
    loading: false,
    ExternalUrl: [],
    External: "",
    profileImage: "",
    picture: [],
    cahngePic: false,
    socialMediaProfiles: [],
    listCountry: [],
  };
  onDrop = (files: any) => {
    this.setState({ files });
  };
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
    });
  }
  componentDidMount() {
    this.controllerMember.getMember(
      {
        userId: this.local.getUserId(),
      },
      (res) => {
        this.setState({
          id: this.local.getUserId,
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.userEmail,
          degree: res.degree,
          major: res.major,
          phoneNumber: res.phoneNumber,
          institution: this.state.institution,
          addressLine1: res.addressLine1,
          addressLine2: res.addressLine2,
          zipCode: res.zipCode,
          role: this.RoleUser,
          profileImage: res.profileImage,
          socialMediaProfiles: res.socialMediaProfiles.map((item, index) => {
            return { label: item, value: index };
          }),
        });
      },
      (err) => {}
    );
    this.setState({
      listDegree: this.local.getSetting().degree.map((item) => {
        return { label: item.title, value: item.id };
      }),
      listCountry: countries.map((item) => {
        return { label: item.englishName, value: item.id };
      }),
    });
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelChangeSelect(e: { label: string; value: number }, target: string) {
    this.setState({ [target]: e.value });
  }
  addExternalUrl() {
    let Url = [...this.state.ExternalUrl];
    Url.push(this.state.External);
    this.setState({
      ExternalUrl: Url,
      External: "",
    });
  }
  onDropPic = (picture: any) => {
    this.setState({
      picture,
      profileImage: URL.createObjectURL(picture[0]),
      cahngePic: true,
    });
  };
  handelDeletePic(arg: File) {
    this.setState({
      picture: this.state.picture.filter((file) => file.name !== arg.name),
      profileImage: "",
    });
  }
  handelDeleteExternalLink(link: string) {
    this.setState({
      ExternalUrl: this.state.ExternalUrl.filter((item) => item !== link),
    });
  }
  UpdateMyProfile() {
    const body: UpdateMyProfileReq = {
      id: this.local.getUserId(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      degree: this.state.degree,
      major: this.state.major,
      phoneNumber: this.state.phoneNumber,
      institution: this.state.institution,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      locationId: this.state.locationId,
      zipCode: this.state.zipCode,
      token: localStorage.getItem("token")!,
      role: this.state.role,
    };
    this.setState({
      loading: true,
    });
    this.controller.UpdateMyProfile(
      body,
      (res) => {
        if (
          this.state.files.length ||
          this.state.ExternalUrl.length ||
          this.state.picture.length
        ) {
          this.handelUpload(res.id);
          this.handelUploadPic(res.id);
        } else {
          this.setState({
            loading: false,
          });
          // this.props.history.push(
          //   `${AppRoutes.equip_profile.replace(
          //     ":id",
          //     res.id?.toString() ?? ""
          //   )}`
          // );
        }
      },
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }
  async handelUpload(id: string) {
    const formData = new FormData();
    for (let i = 0; i < this.state.files.length; i++) {
      const file = this.state.files[i];
      formData.append("Files", file);
    }
    for (let i = 0; i < this.state.ExternalUrl.length; i++) {
      const file = this.state.ExternalUrl[i];
      formData.append("ExternalUrls", file);
    }
    formData.append("UseCase", "11");

    await this.UploadController.UloadMedia(
      formData,
      (res) => {},
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }
  async handelUploadPic(id: string) {
    const formData = new FormData();
    for (let i = 0; i < this.state.picture.length; i++) {
      const file = this.state.picture[i];
      formData.append("Files", file);
    }
    formData.append("UseCase", "5");

    await this.UploadController.UloadMedia(
      formData,
      (res) => {
        this.setState({
          loading: false,
        });
        // this.props.history.push(
        //   `${AppRoutes.equip_profile.replace(":id", id?.toString() ?? "")}`
        // );
      },
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }
  render() {
    const files = this.state.files.map((file: any) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
        <CircleIcon
          type={ThemeCircleIcon.dark}
          width="22px"
          height="22px"
          onClick={() => {
            this.handelDeleteFile(file);
          }}
        >
          <img
            src="/images/icons/garbage_can.svg"
            alt="radvix"
            width={15}
            height={15}
          />
        </CircleIcon>
      </li>
    ));
    const picture = this.state.picture.map((file: any) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
        <CircleIcon
          type={ThemeCircleIcon.dark}
          width="22px"
          height="22px"
          onClick={() => {
            this.handelDeletePic(file);
          }}
        >
          <img
            src="/images/icons/garbage_can.svg"
            alt="radvix"
            width={15}
            height={15}
          />
        </CircleIcon>
      </li>
    ));
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <h5 className="b-title d-flex align-items-center">
            <span
              onClick={() => {
                window.history.back();
              }}
              className="backPage"
            ></span>{" "}
            Edit My Profile
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="User Email:"
                  popQuestion="User Email:"
                  onChange={(e) => {
                    this.handleChange("email", e.target.value);
                  }}
                  value={this.state.email}
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Last Name:"
                  popQuestion="Last Name:"
                  onChange={(e) => {
                    this.handleChange("lastName", e.target.value);
                  }}
                  value={this.state.lastName}
                ></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Attachments
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
                  <CircleIcon
                    width="20px"
                    height="20px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="transparent"
                    border="1px solid #D5D5D5"
                    fontSize="10px"
                    color="#D5D5D5"
                  >
                    <i className="fas fa-question"></i>
                  </CircleIcon>
                </span>
                <div className="d-flex justify-content-between align-items-center">
                  {this.state.profileImage &&
                  this.state.profileImage.length > 2 ? (
                    <Fragment>
                      <img
                        src={
                          !this.state.cahngePic
                            ? this.state.profileImage
                              ? AppConstants.base_url_image +
                                this.state.profileImage
                              : "/images/icons/user.svg"
                            : this.state.profileImage
                        }
                        alt="Avatar"
                        className="rounded-circle avatar mx-2"
                        width="125px"
                        height="125px"
                      />
                      <CircleIcon
                        type={ThemeCircleIcon.dark}
                        width="44px"
                        height="30px"
                        className="mx-2 pointer"
                      >
                        <img
                          src="/images/icons/garbage_can.svg"
                          alt="radvix"
                          width={15}
                          height={15}
                        />
                      </CircleIcon>
                    </Fragment>
                  ) : null}

                  <Dropzone onDrop={this.onDropPic}>
                    {({ getRootProps, getInputProps }) => (
                      <section className="container fileUploadBox">
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} multiple={false} />
                          <MainButton
                            type={MainButtonType.light}
                            minHeight="30px"
                            minWidth="179px"
                            fontSize="14px"
                            borderRadius="50px"
                            backgroundColor="#fff"
                            border="1px solid #707070"
                            color="#707070"
                            className="mt-4"
                            children={
                              <div className="d-flex justify-content-between align-items-center">
                                <img
                                  src="/Images/icons/cloud_computing.svg"
                                  alt="sssss"
                                  height="20"
                                />{" "}
                                <span className="flex-fill">
                                  Browse Local Files
                                </span>
                              </div>
                            }
                          ></MainButton>
                          <p>Or drag and drop files here</p>
                        </div>
                        <aside>
                          
                          <ul>{picture}</ul>
                        </aside>
                      </section>
                    )}
                  </Dropzone>
                </div>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Email:"
                  popQuestion="Email:"
                  onChange={(e) => {
                    this.handleChange("email", e.target.value);
                  }}
                  value={this.state.email}
                ></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Education Background:
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
                  <CircleIcon
                    width="20px"
                    height="20px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="transparent"
                    border="1px solid #D5D5D5"
                    fontSize="10px"
                    color="#D5D5D5"
                  >
                    <i className="fas fa-question"></i>
                  </CircleIcon>
                </span>
                <InputComponent
                  type={InputType.text}
                  label="School/University"
                  popQuestion="School/University"
                  onChange={(e) => {
                    this.handleChange("institution", e.target.value);
                  }}
                  value={this.state.institution}
                ></InputComponent>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="item w-50">
                  <SelectComponent
                    items={this.state.listDegree}
                    TextItem="title"
                    ValueItem="id"
                    className="my-2"
                    placeholder="PhD"
                    label="Degree"
                    onChange={(e) => {
                      this.handelChangeSelect(e, "degree");
                    }}
                  ></SelectComponent>
                </div>
                <div className="item ">
                  <InputComponent
                    type={InputType.text}
                    label="Major"
                  ></InputComponent>
                </div>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <span className="label d-flex align-items-center">
                  Resume (CV):
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
                  <CircleIcon
                    width="20px"
                    height="20px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="transparent"
                    border="1px solid #D5D5D5"
                    fontSize="10px"
                    color="#D5D5D5"
                  >
                    <i className="fas fa-question"></i>
                  </CircleIcon>
                </span>
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section className="container fileUploadBox">
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <MainButton
                          type={MainButtonType.light}
                          minHeight="30px"
                          minWidth="179px"
                          fontSize="14px"
                          borderRadius="50px"
                          backgroundColor="#fff"
                          border="1px solid #707070"
                          color="#707070"
                          className="mt-4"
                          children={
                            <div className="d-flex justify-content-between align-items-center">
                              <img
                                src="/Images/icons/cloud_computing.svg"
                                alt="sssss"
                                height="20"
                              />{" "}
                              <span className="flex-fill">
                                Browse Local Files
                              </span>
                            </div>
                          }
                        ></MainButton>
                        <p>Or drag and drop files here</p>
                      </div>
                      <aside>
                        
                        <ul>{files}</ul>
                      </aside>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Contact Info:
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
                  <CircleIcon
                    width="20px"
                    height="20px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="transparent"
                    border="1px solid #D5D5D5"
                    fontSize="10px"
                    color="#D5D5D5"
                  >
                    <i className="fas fa-question"></i>
                  </CircleIcon>
                </span>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Address Line 1"
                    popQuestion="Address Line 1"
                    className="my-2"
                    onChange={(e) => {
                      this.handleChange("addressLine1", e.target.value);
                    }}
                    value={this.state.addressLine1}
                  ></InputComponent>
                  <InputComponent
                    type={InputType.text}
                    label="Address Line 2"
                    popQuestion="Address Line 2"
                    className="my-2"
                    onChange={(e) => {
                      this.handleChange("addressLine2", e.target.value);
                    }}
                    value={this.state.addressLine2}
                  ></InputComponent>
                </div>
                <div className="row">
                  <div className="item col-md-6">
                    <InputComponent
                      type={InputType.text}
                      label="City"
                    ></InputComponent>
                  </div>
                  <div className="item col-md-6">
                    <InputComponent
                      type={InputType.text}
                      label="State/Province"
                    ></InputComponent>
                  </div>
                </div>
                <div className="row">
                  <div className="item col-md-6">
                    <InputComponent
                      type={InputType.text}
                      label=" ZIP/Postal Code"
                      onChange={(e) => {
                        this.handleChange("zipCode", e.target.value);
                      }}
                      value={this.state.zipCode}
                    ></InputComponent>
                  </div>
                  <div className="item col-md-6">
                    <InputComponent
                      type={InputType.text}
                      label="Phone"
                      onChange={(e) => {
                        this.handleChange("phoneNumber", e.target.value);
                      }}
                      value={this.state.phoneNumber}
                    ></InputComponent>
                  </div>
                </div>
                <div className="item">
                  <SelectComponent
                    items={this.state.listCountry}
                    TextItem="name"
                    ValueItem="id"
                    className="my-2"
                    label="Country"
                    onChange={(e) => {
                      this.handelChangeSelect(e, "countryId");
                    }}
                  ></SelectComponent>
                </div>
                <div className="item">
                  <span className="label d-flex align-items-center col-12">
                    Links
                    <CircleIcon
                      width="20px"
                      height="20px"
                      type={ThemeCircleIcon.dark}
                      backgroundColor="transparent"
                      border="1px solid #D5D5D5"
                      fontSize="10px"
                      color="#D5D5D5"
                    >
                      <i className="fas fa-question"></i>
                    </CircleIcon>
                  </span>
                  <div className="d-flex justify-content-between align-items-center">
                    <SelectComponent
                      items={this.state.socialMediaProfiles}
                      TextItem="name"
                      ValueItem="id"
                      className="mx-2 w-50"
                      placeholder="Select…"
                    ></SelectComponent>

                    <div className="item d-flex justify-content-between align-items-center mt-0 w-50">
                      <InputComponent
                        type={InputType.text}
                        placeholder=""
                        onChange={(e) => {
                          this.handleChange("External", e.target.value);
                        }}
                      ></InputComponent>
                      <CircleIcon
                        width="36px"
                        height="36px"
                        type={ThemeCircleIcon.dark}
                        backgroundColor="#9D9D9D"
                        fontSize="18px"
                        color="#ffffff"
                        className="mx-2"
                        onClick={() => {
                          this.addExternalUrl();
                        }}
                      >
                        <i className="fas fa-plus"></i>
                      </CircleIcon>
                    </div>
                  </div>
                </div>
                <ul className="file-list mt-3">
                  {this.state.socialMediaProfiles.map((item) => (
                    <li
                      key={item.value}
                      className="d-flex justify-content-between align-items-center mb-2"
                    >
                      <div>
                        <img
                          src="/images/images/linkedIn_logo_initials.png"
                          alt=""
                        />{" "}
                        <MainButton
                          children={item.value}
                          type={MainButtonType.dark}
                          borderRadius="24px"
                          fontSize="14px"
                          backgroundColor="#F5F5F5"
                          color="#096BFF"
                        ></MainButton>
                      </div>
                      <CircleIcon
                        type={ThemeCircleIcon.dark}
                        width="29px"
                        height="29px"
                        className="mx-2 pointer"
                      >
                        <img
                          src="/images/icons/garbage_can.svg"
                          alt="radvix"
                          width={15}
                          height={15}
                        />
                      </CircleIcon>
                    </li>
                  ))}
                  {this.state.ExternalUrl.map((item) => (
                    <li
                      key={item}
                      className="d-flex justify-content-between align-items-center mb-2"
                    >
                      <div>
                        <img
                          src="/images/images/linkedIn_logo_initials.png"
                          alt=""
                        />{" "}
                        <MainButton
                          children={item}
                          type={MainButtonType.dark}
                          borderRadius="24px"
                          fontSize="14px"
                          backgroundColor="#F5F5F5"
                          color="#096BFF"
                        ></MainButton>
                      </div>
                      <CircleIcon
                        type={ThemeCircleIcon.dark}
                        width="29px"
                        height="29px"
                        className="mx-2 pointer"
                        onClick={() => this.handelDeleteExternalLink(item)}
                      >
                        <img
                          src="/images/icons/garbage_can.svg"
                          alt="radvix"
                          width={15}
                          height={15}
                        />
                      </CircleIcon>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
              <MainButton
                type={MainButtonType.light}
                children={"Cancel"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
              ></MainButton>
              <MainButton
                type={MainButtonType.dark}
                children={"Reset Password"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
              ></MainButton>
              <MainButton
                type={MainButtonType.dark}
                children={"Update"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                loading={this.state.loading}
                onClick={() => {
                  this.UpdateMyProfile();
                }}
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
