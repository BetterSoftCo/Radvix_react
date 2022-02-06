import React from "react";
import ReactPaginate from "react-paginate";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import  MyDataCollectionTable  from "./component/my_data_collection_tbl";

 class MyDataCollection extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().user;
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
      <div className="container-fluid research task">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6 style={{ width: "35%" }}>Data Collection</h6>
                <InputIcon
                  chilren={
                    <img src='/images/icons/search_box_icon.svg' alt="" />
                  }
                  width="100%"
                  placeholder="Search..."  TopPosition="15%"
                ></InputIcon>
              </div>
              <div className="right w-50 d-flex justify-content-end align-items-center">
                <MainButton
                  children="New Data"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  onClick={()=>{this.props.history.push(AppRoutes.data_new)}}
                ></MainButton>
                <MainButton
                  children="All Date"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  onClick={()=>{this.props.history.push(AppRoutes.data)}}
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
            <MyDataCollectionTable role={this.RoleUser}></MyDataCollectionTable>

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
export default withRouter(MyDataCollection)