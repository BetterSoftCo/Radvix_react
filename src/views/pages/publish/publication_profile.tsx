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
export class PublicationProfile extends React.Component {
  RoleUser = store.getState();
  state = {
    Data: {
      Items: [
        {
          name: "Structural and Materials Lab",
          Institution: "University Of Miami",
          Category: "Material",
          Eqiups: "12",
        },
        {
          name: "Structural and Materials Lab",
          Institution: "University Of Miami",
          Category: "Material",
          Eqiups: "12",
        },
        {
          name: "Structural and Materials Lab",
          Institution: "University Of Miami",
          Category: "Material",
          Eqiups: "12",
        },
        {
          name: "Structural and Materials Lab",
          Institution: "University Of Miami",
          Category: "Material",
          Eqiups: "12",
        },
      ],
    },
  };

  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="b-title d-flex align-items-center">
              <span onClick={()=>{window.history.back()}} className="backPage"></span> {"Publication Profile"}
            </h5>
            <div>
              <MainButton
                children="Upload Next Draft"
                type={MainButtonType.dark}
                borderRadius="24px"
                fontSize="14px"
                className="mx-2"
              ></MainButton>
              <MainButton
                children="Discussion Panel"
                type={MainButtonType.dark}
                borderRadius="24px"
                fontSize="14px"
                className="mx-2"
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
              <span className="mx-2">Nima Hosseinzadeh</span>
              to upload the next draft since
              <span className="mx-2">Aug 23, 2020.</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-4 t-title mb-0 border-t-l">Priority</h6>
                <div className="col-8 t-desc border-t-r">
                  <MainButton
                    children="High Priority"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="14px"
                    backgroundColor="#096BFF"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Category</h6>
                <div className="col-8 t-desc">Journal Paper</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Submitting For</h6>
                <div className="col-8 t-desc">Journal of Materials</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Started by</h6>
                <div className="col-8 t-desc"> N. Hosseinzadeh</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Start - Deadline</h6>
                <div className="col-8 t-desc"> 07/10/2021 - 04/12/2022</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">
                  Date Completed
                </h6>
                <div className="col-8 t-desc border-b-r">
                  <MainButton
                    children="On Going"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="14px"
                    backgroundColor="#8EE1FF"
                  ></MainButton>
                  <MainButton
                    children="Delayed"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="14px"
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
                    children={
                      <img
                        src="/Images/pages/team_menu.svg"
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
                  >
                    <i className="fas fa-plus"></i>
                  </CircleIcon>
                </div>
                <BoxListScroll
                  items={[
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  className="mt-2"
                ></BoxListScroll>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center">
              <div className="left d-flex w-50 align-items-center">
                <h6 style={{ width: "35%" }}>Drafts</h6>
                <InputIcon
                  chilren={
                    <img src="/images/pages/search_box_icon.svg" alt="radvix" />
                  }
                  width="100%"
                  height="44px"
                  placeholder="Search..."
                ></InputIcon>
              </div>
              <div className="right w-25 d-flex justify-content-end align-items-center">
                <MainButton
                  children="Upload Next Draft"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="mx-2"
                ></MainButton>
                <SelectComponent
                  width="63px"
                  height="44px"
                  items={[
                    { item: 1, id: 1 },
                    { item: 2, id: 2 },
                    { item: 3, id: 3 },
                  ]}
                  TextItem="item"
                  ValueItem="id"
                ></SelectComponent>
              </div>
            </div>
            <Drafts
              Items={this.state.Data.Items}
              Heading={["Laboratory Name", "Institution", "Category", "Eqiups"]}
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
                pageCount={20}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
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
