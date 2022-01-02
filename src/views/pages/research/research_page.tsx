import React from "react";
import ReactPaginate from "react-paginate";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import AcordienTableResearch from "./component/acordien_table_research";

export class ResearchPage extends React.Component {
  RoleUser = store.getState();
  state = {
    Data: {
      Items: [
        {
          name: "Studying the effects of freeze thaw cycle…",
          Institution: "07/22/2021",
          Category: "Material",
        },
        {
          name: "Studying the effects of freeze thaw cycle…",
          Institution: "07/22/2021",
          Category: "Material",
        },
        {
          name: "Studying the effects of freeze thaw cycle…",
          Institution: "07/22/2021",
          Category: "Material",
        },
        {
          name: "Studying the effects of freeze thaw cycle…",
          Institution: "07/22/2021",
          Category: "Material",
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
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6 style={{ width: "35%" }}>Research List</h6>
                <InputIcon
                  chilren={
                    <img src="/images/pages/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."
                ></InputIcon>
              </div>
              <div className="right w-25 d-flex justify-content-end">
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
            <AcordienTableResearch
              Items={this.state.Data.Items}
              Heading={["Research Name", "Deadline", "Status"]}
            ></AcordienTableResearch>

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
