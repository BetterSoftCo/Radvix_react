/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { MainButton, MainButtonType } from "../components/button";
import { SelectComponent } from "../components/select_input";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../core/constants";
import { ResearchController } from "../../controllers/research/research_controller";
import { store } from "../../data/store";
import { LocalDataSources } from "../../data/local_datasources";
import AcordienTableResearchHeader from "./component/acordian_table_research";
import { InputIcon } from "../components/search_box";
import ReactPaginate from "react-paginate";
import { CircleIcon, ThemeCircleIcon } from "../components/circle_icon";
interface IHeader {}
const Header: React.FC<IHeader & RouteComponentProps> = (props) => {
  const [listResearch, setListResearch] = useState<Array<any>>([]);
  const [PageNumber, setPageNumber] = useState<number>(1);
  const [PageSize, setPageSize] = useState<number>(10);
  const [PageCount, setPageCount] = useState<number>(0);
  const [TotalCount, setTotalCount] = useState<number>(0);
  const [ResearchName, setResearchName] = useState<string>(
    "Choose your research"
  );
  const controller = new ResearchController();
  const local = new LocalDataSources();
  const RoleUser = store.getState().userRole;
  useEffect(() => {
    GetResearch(PageNumber, PageSize);
  }, []);
  const handelChangePageNumber = (e: { selected: number }) => {
    setPageNumber(e.selected);
    GetResearch(e.selected + 1, PageSize);
  };
  const handelChangePageSize = (e: { label: string; value: number }) => {
    setPageSize(e.value);
    GetResearch(PageNumber, e.value);
  };
  const GetResearch = (PageNumber: number, PageSize: number) => {
    if (local.logedin()) {
      controller.getResearches(
        { PageNumber: PageNumber, PageSize: PageSize },
        (res) => {
          setListResearch(res.researchesList!);
          setPageCount(Math.ceil(res.count! / PageSize));
          setTotalCount(res.count!);
        },
        (err) => {
          console.log("GetResearch layout");
        }
      );
    }
  };
  const changeResearch = (value: string) => {
    setResearchName(value);
  };
  return (
    <Fragment>
      <div className="header">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-10 right-side">
              <div className="row h-100">
                <div className="col-md-2 col-6 d-flex justify-content-start align-items-center">
                  <img
                    src="/images/images/radvix_logo.png"
                    height="42px"
                    width="100px"
                  />
                </div>
                {props.location.pathname.search("/Admin") >= 0 ? null : (
                  <Fragment>
                    <div className="col-md-2 col-6 d-flex justify-content-center align-items-center">
                      <MainButton
                        type={MainButtonType.dark}
                        minHeight="42px"
                        fontSize="15px"
                        borderRadius="50px"
                        className="px-3"
                        onClick={() => {
                          props.history.push(AppRoutes.dashboard);
                        }}
                        children={
                          <div>
                            <img
                              src="/images/icons/home.svg"
                              alt="sssss"
                              height="20"
                            />{" "}
                            Home
                          </div>
                        }
                      ></MainButton>
                    </div>
                    <div className="col-md-5 col-8 d-flex justify-content-center align-items-center">
                      <h6 className="mb-0 Selected-Research fw-light">
                        Selected Research:
                      </h6>
                      <button
                        type="button"
                        className="select_header_research "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        {ResearchName}
                        <div className="d-flex justify-content-center align-items-center">
                          <img
                            src="/images/icons/arrow_btn_header.svg"
                            alt=""
                          />
                          <span className="notif mx-2"></span>
                        </div>
                      </button>
                    </div>
                    <div className="col-md-3 col-4 d-flex justify-content-center align-items-center">
                      <h6 className="mb-0 Selected-Research w-25 fw-light">
                        Timeline
                      </h6>
                      <ProgressBar
                        completed={20}
                        className="w-75"
                        bgColor="#474747"
                        labelAlignment="outside"
                        labelColor="#474747"
                      />
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
            <div className="col-lg-2 left-side">
              <div className="d-flex align-items-center justify-content-between">
                <img
                  onClick={() => {
                    props.history.push(
                      `${AppRoutes.member_profile.replace(
                        ":id",
                        local.getUserId()
                      )}`
                    );
                  }}
                  src="/images/images/img_avatar.png"
                  alt="Avatar"
                  className="rounded-circle avatar pointer"
                />
                <div className="d-flex flex-column">
                  <span className="text-center text-black-color text-truncate">
                    Welcome, {local.getUserInfo().firstName}!
                  </span>
                  <MainButton
                    children="Principal Investigator"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="11px"
                  ></MainButton>
                </div>
                <a
                  onClick={() => {
                    props.history.push(AppRoutes.member_profile);
                  }}
                  className="pointer mx-1"
                >
                  <img src="/images/icons/profile_view_icon.svg" alt="" />
                </a>
                <a
                  onClick={() => {
                    props.history.push(AppRoutes.login);
                  }}
                  className="pointer mx-1"
                >
                  <img src="/images/icons/logout_icon.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="col-12 modal-content">
            <div className="TableBox">
              <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
                <div className="left d-flex w-50 align-items-center">
                  <h6 style={{ width: "35%" }}>Research List</h6>
                  <InputIcon
                    chilren={
                      <img src="/images/icons/search_box_icon.svg" alt="" />
                    }
                    width="100%"
                    placeholder="Search..."
                    TopPosition="15%"
                  ></InputIcon>
                </div>
                <div className="right w-50 d-flex justify-content-end align-items-center">
                  <SelectComponent
                    width="90px"
                    height="44px"
                    items={[
                      { label: "10", value: 10 },
                      { label: "15", value: 15 },
                      { label: "20", value: 20 },
                    ]}
                    TextItem="item"
                    ValueItem="id"
                    isMulti={false}
                    placeholder={PageSize.toString()}
                    onChange={(e) => {
                      handelChangePageSize(e);
                    }}
                  ></SelectComponent>
                </div>
              </div>
              <AcordienTableResearchHeader
                Items={listResearch}
                Heading={[
                  { name: "Research Name", center: false },
                  { name: "Status", center: true },
                ]}
                changeResearch={changeResearch}
                role={RoleUser}
              ></AcordienTableResearchHeader>

              <div className="d-flex justify-content-between align-items-baseline">
                <div className="d-flex justify-content-end flex-fill">
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
                    pageCount={PageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(e) => {
                      handelChangePageNumber(e);
                    }}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
                <div className="d-flex justify-content-end flex-fill">
                  <p className="text-right mb-0 ">
                    Total Results: {TotalCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default withRouter(Header);
