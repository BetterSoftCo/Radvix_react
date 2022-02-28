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
import { SetResearchId } from "../../data/store/actions/research_action";
import { LocalDataSources } from "../../data/local_datasources";
interface IHeader { }
const Header: React.FC<IHeader & RouteComponentProps> = (props) => {
  const [listResearch, setListResearch] = useState<Array<any>>([])
  const controller = new ResearchController()
  const local = new LocalDataSources()
  useEffect(() => {
    controller.getResearches({ PageNumber: 1, PageSize: 100 }, res => {
      setListResearch(res.researchesList!.map(item => {
        return { label: item?.title, value: item?.id }
      }))
    }, err => { })
  }, []);
  const handelChangeSelect = (
    e: { label: string; value: number }
  ) => {
    store.dispatch(SetResearchId(e.value))
  }
  return (
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
                        props.history.push(AppRoutes.dashboard)
                      }}
                      children={
                        <div>
                          <img
                            src="/images/icons/home.svg"
                            alt="sssss"
                            height='20'
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
                    <SelectComponent
                      items={listResearch}
                      TextItem="name"
                      ValueItem="id"
                      className="py-0 select_header_research"
                      backgroundColor="#F5F5F5"
                      border="none"
                      onChange={(e) => { handelChangeSelect(e) }}

                    ></SelectComponent>
                  </div>
                  <div className="col-md-3 col-4 d-flex justify-content-center align-items-center">
                    <h6 className="mb-0 Selected-Research w-25 fw-light">Timeline</h6>
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
                onClick={() => { props.history.push(AppRoutes.member_profile) }}
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
              <a onClick={() => { props.history.push(AppRoutes.member_profile) }} className="pointer mx-1">
                <img src="/images/icons/profile_view_icon.svg" alt="" />
              </a>
              <a onClick={() => { props.history.push(AppRoutes.login) }} className="pointer mx-1">
                <img src="/images/icons/logout_icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
