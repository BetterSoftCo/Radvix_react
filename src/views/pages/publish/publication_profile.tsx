import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { Theme } from "../../../core/utils";
import { BoxListScroll } from "../../components/box_list_scroll";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import ReactPaginate from "react-paginate";
import { Drafts } from "./component/drafts";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { publishController } from "../../../controllers/publish/publish_controller";
import moment from "moment";
import { toast } from "react-toastify";
interface RouteParams {
  id: string;
}
class PublicationProfile extends React.Component<RouteComponentProps<RouteParams>> {
  RoleUser = store.getState().userRole;
  controller = new publishController();
  componentDidMount() {
    this.controller.getPublishById(
      { publicationId: parseInt(this.props.match.params.id) },
      (res) => {
        this.setState({
          publication: res,
          nextDraft: res.nextDraft,
          drafts: res.drafts
        });
      }
    );
  }
  state = {
    publication: {
      category: "",
      creatorFirstName: "",
      creatorLastName: "",
      name: "",
      priority: 0,
      startDate: new Date(),
      endDate: new Date(),
      submitAt: "",
      users: [],
      publication: [],
    },
    drafts: [{
      createdDate: "",
      finalVersion: false,
      firstName: "",
      lastName: "",
      medias: [],
    }],
    nextDraft: {
      nextDrafterFirstName: "",
      image: "",
      nextDrafterLastName: "",
      createdDate: ""
    },
  };
  handelAddUser() {
    if (store.getState().ResearchId > 0) {
      this.controller.addUser({ publicationId: parseInt(this.props.match.params.id), researchId: store.getState().ResearchId }, res => {
      }, err => console.log(err)
      )
    } else {
      toast.error(`please select research`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  handleGetById(){
    this.controller.getPublishById(
      { publicationId: parseInt(this.props.match.params.id) },
      (res) => {
        this.setState({
          publication: res,
          nextDraft: res.nextDraft,
          drafts: res.drafts
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
              {"Publication Profile"}
            </h5>
            <div className="d-flex justify-content-end"> 
              <MainButton
                children="Upload Next Draft"
                type={MainButtonType.dark}
                borderRadius="24px"
                fontSize="14px"
                className="mx-2"
                onClick={() =>
                  this.props.history.push(
                    `${AppRoutes.publish_upload.replace(
                      ":id",
                      parseInt(this.props.match.params.id)?.toString()
                    )}`
                  )
                }
              ></MainButton>
              <MainButton
                children="Discussion Panel"
                type={MainButtonType.dark}
                borderRadius="24px"
                fontSize="14px"
                className="mx-2 px-3"
                onClick={() => {
                  this.props.history.push(
                    `${AppRoutes.discussion_new
                      .replace(":topic", "7")
                      .replace(":section", "10")}`
                  );
                }}
              ></MainButton>
            </div>
          </div>
          <div className="Studying p-4 my-2">
            <h3 className="px-5 text-center">
              Synergistic Effects Of Air Content And Supplementary Cementitious
              Materials On Durability
            </h3>
            <div className="title-discusstion text-center">
              Waiting for
              <span className="mx-2">{this.state.nextDraft.nextDrafterFirstName} {this.state.nextDraft.nextDrafterLastName}</span>
              to upload the next draft since
              <span className="mx-2">{moment(this.state.nextDraft.createdDate).format("LL")}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-5 t-title mb-0 border-t-l">Priority</h6>
                <div className="col-7 t-desc border-t-r">
                  <MainButton
                    children={this.state.publication.priority === 0 ? "Low" : this.state.publication.priority === 1 ? "Medium" : "High"}
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="11px"
                    backgroundColor="#096BFF"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Category</h6>
                <div className="col-7 t-desc">{this.state.publication.category}</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Submitting For</h6>
                <div className="col-7 t-desc">{this.state.publication.submitAt}</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Started by</h6>
                <div className="col-7 t-desc">{this.state.publication.creatorFirstName} {this.state.publication.creatorLastName}</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Start - Deadline</h6>
                <div className="col-7 t-desc">{moment(this.state.publication.startDate).format("YYYY/MM/DD")} -{moment(this.state.publication.endDate).format("YYYY/MM/DD")}</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0 border-b-l">
                  Date Completed
                </h6>
                <div className="col-7 t-desc border-b-r">
                  <MainButton
                    children="On Going"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="11px"
                    backgroundColor="#8EE1FF"
                  ></MainButton>
                  <MainButton
                    children="Delayed"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="11px"
                    backgroundColor="#FE861F"
                  ></MainButton>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="teams mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <IconTextRow
                    theme={Theme.dark}
                    text="Members Collaborating"
                    fontSize="12px"
                    children={
                      <img
                        src="/images/icons/team_menu.svg"
                        className="mx-2"
                        alt=""
                      />
                    }
                  ></IconTextRow>
                  <CircleIcon
                    width="36px"
                    height="36px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#9D9D9D"
                    fontSize="18px"
                    color="#ffffff"
                    className="mx-2"
                onClick={() => { this.handelAddUser() }}
                    
                  >
                    <i className="fas fa-plus"></i>
                  </CircleIcon>
                </div>
                <BoxListScroll
                  items={this.state.publication.users}
                  TextItem="firstName"
                  default_photo="/Images/icons/equipment_Icon.svg"
                  ValueItem="id"
                  ImageItem="image"
                  className="mt-2 pointer"
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
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center">
              <div className="left d-flex w-50 align-items-baseline">
                <h6 style={{ width: "35%" }}>Drafts</h6>
                <InputIcon
                  chilren={
                    <img src="/images/icons/search_box_icon.svg" alt="radvix" />
                  }
                  width="100%"
                  placeholder="Search..."
                  TopPosition="15%"
                ></InputIcon>
              </div>
              <div className="right w-50 d-flex justify-content-end align-items-center">
                <MainButton
                  children="Upload Next Draft"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="mx-2"
                  onClick={() =>
                    this.props.history.push(
                      `${AppRoutes.publish_upload.replace(
                        ":id",
                        parseInt(this.props.match.params.id)?.toString()
                      )}`
                    )
                  }
                ></MainButton>
                <SelectComponent
                  width="90px"
                  height="44px"
                  items={[
                    { label: '10', value: 10 },
                    { label: '15', value: 15 },
                    { label: '20', value: 20 },
                  ]}
                  TextItem="item"
                  ValueItem="id"
                  isMulti={false}
                  placeholder="10"
                ></SelectComponent>
              </div>
            </div>
            <Drafts
              Items={this.state.drafts}
               Reload= {() => this.handleGetById()}
              Heading={[{ name: 'File', center: false }, { name: 'Added By', center: true }, { name: 'Date', center: true }, { name: 'Version', center: true }]}
            ></Drafts>
            <div className="d-flex justify-content-center align-items-center">
              <ReactPaginate
                previousLabel={
                  <CircleIcon
                    width="24px"
                    backgroundColor="#ADADAD"
                    height="24px"
                    type={ThemeCircleIcon.dark}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </CircleIcon>
                }
                nextLabel={
                  <CircleIcon
                    width="24px"
                    backgroundColor="#ADADAD"
                    height="24px"
                    type={ThemeCircleIcon.dark}
                  >
                    <i className="fas fa-angle-right"></i>
                  </CircleIcon>
                }
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={100}
                onPageChange={() => {
                  console.log("sssss");
                }}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PublicationProfile);
