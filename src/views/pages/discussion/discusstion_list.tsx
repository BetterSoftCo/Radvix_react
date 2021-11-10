import React from "react";
import ReactPaginate from "react-paginate";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import { DiscusstionListTable } from "./component/discusstion_list_table";

export class DiscusstionList extends React.Component {
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
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6 className="b-title d-flex" style={{ width: "35%" }}>
                  <span className="backPage"></span> Equipment List
                </h6>
                <InputIcon
                  chilren={
                    <img src="/images/pages/Search Box Icon.svg" alt="" />
                  }
                  width="100%"
                  height="44px"
                  placeholder="Search..."
                ></InputIcon>
              </div>
              <div className="right  d-flex justify-content-between">
                <MainButton
                  children="New Equip"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="my-2 mx-2"
                ></MainButton>
                <MainButton
                  children="Laboratories"
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
            <DiscusstionListTable
              Items={this.state.Data.Items}
              Heading={["Subject", "Related To", "Update"]}
            ></DiscusstionListTable>

            <div className="d-flex justify-content-center align-items-center my-3">
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
