import React from "react";
import ReactPaginate from "react-paginate";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";

export class MemberPage extends React.Component {
  RoleUser = store.getState().user;
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-center ">
                <h4 style={{ width: "45%" }} className="b-title d-flex"><span onClick={()=>{window.history.back()}} className="backPage"></span> Members</h4>
                <InputIcon
                  chilren={
                    <img src="/images/icons/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."  TopPosition="15%"
                ></InputIcon>
              </div>
              <div className="right w-50 d-flex justify-content-end align-items-center">
                <MainButton
                  children="New Member"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="my-2"
                ></MainButton>
                <MainButton
                  children="Teams"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="my-2"
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
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <MemberItem></MemberItem>
              ))}
            </div>

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
                  pageCount={20}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={()=>{console.log('changepage')}}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
                  </div>
                  <div className="d-flex justify-content-end flex-fill">
                  <p className="text-right mb-0 " >Total Results: 45</p>
                  </div>
                 
                
              </div>
          </div>
        </div>
      </div>
    );
  }
}

const MemberItem: React.FC = () => (
  <div className="col-md-3 d-flex justify-content-center align-items-center flex-column mb-3">
    <img
      src="/images/images/img_avatar.png"
      alt="Avatar"
      className="rounded-circle avatar"
      width="125px"
      height="125px"
    />
    <h5 className="mt-2 fw-light">Nima Hosseinzadeh</h5>
    <hr className="w-100 my-0" />
    <MainButton
      children="Principal Investigator"
      type={MainButtonType.dark}
      borderRadius="24px"
      fontSize="14px"
      className="my-2"
    ></MainButton>
    <h6 className="fw-light">Structural And Material Lab</h6>
    <div className="d-flex justify-content-center align-items-center">
      <CircleIcon
        width="26px"
        height="26px"
        type={ThemeCircleIcon.dark}
        onClick={() => {
          console.log("ssss");
        }}
        className="pointer mx-1"
      >
        <img src="/images/icons/edit.svg" alt="radvix" />
      </CircleIcon>
      <CircleIcon
        width="26px"
        height="26px"
        type={ThemeCircleIcon.dark}
        onClick={() => {
          console.log("ssss");
        }}
        className="pointer mx-1"
      >
        <img src="/images/icons/google_docs.svg" alt="radvix" width={12} height={12} />
      </CircleIcon>
    </div>
  </div>
);
