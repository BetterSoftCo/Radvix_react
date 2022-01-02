import React from "react";
import ReactPaginate from "react-paginate";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import MyPublicationsTable from "./component/my_publications_tbl";

export class MyPublications extends React.Component {
  RoleUser = store.getState();
  state = {
    Data: {
      Items: [
        {
          name: "Studying the effects of freeze thaw cycle…",
          Institution: "Report",
          Category: "N. Hosseinzadeh",
          Eqiups: "07/22/2021",
        },
        {
          name: "Studying the effects of freeze thaw cycle…",
          Institution: "Report",
          Category: "N. Hosseinzadeh",
          Eqiups: "07/22/2021",
        },
        {
          name: "Studying the effects of freeze thaw cycle…",
          Institution: "Report",
          Category: "N. Hosseinzadeh",
          Eqiups: "07/22/2021",
        },
        {
          name: "Studying the effects of freeze thaw cycle…",
          Institution: "Report",
          Category: "N. Hosseinzadeh",
          Eqiups: "07/22/2021",
        },
      ],
    },
  };
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6 className="b-title d-flex" style={{ width: "35%" }}>
                  <span
                    onClick={() => {
                      window.history.back();
                    }}
                    className="backPage"
                  ></span>{" "}
                  My Publications
                </h6>
                <InputIcon
                  chilren={
                    <img src="/images/pages/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."
                ></InputIcon>
              </div>
              <div className="right  d-flex justify-content-between">
                <MainButton
                  children="New Publication"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="my-2 mx-2"
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
            <MyPublicationsTable
              Items={this.state.Data.Items}
              Heading={["Name", "Category", "Currently Working On", "Deadline"]}
            ></MyPublicationsTable>

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
                  onPageChange={() => {
                    console.log("changepage");
                  }}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
              <div className="d-flex justify-content-end flex-fill">
                <p className="text-right mb-0 ">Total Results: 45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
