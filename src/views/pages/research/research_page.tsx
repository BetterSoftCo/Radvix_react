import React from "react";
import ReactPaginate from "react-paginate";
import { ResearchController } from "../../../controllers/research/research_controller";
import { ResearchesList } from "../../../data/models/responses/research/researches_res";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import AcordienTableResearch from "./component/acordien_table_research";
type StateType = {
  Researches: ResearchesList[],
  PageNumber: number,
  PageSize: number,
  PageCount: number,
  TotalCount:number
}
export class ResearchPage extends React.Component {
  controller = new ResearchController();
  RoleUser = store.getState().userRole;
  state: StateType = {
    Researches: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount:0
  };
  componentDidMount() {
    this.GetResearch(this.state.PageNumber, this.state.PageSize)
  }
  GetResearch(PageNumber: number, PageSize: number) {
    this.controller.getResearches({ PageNumber: PageNumber, PageSize: PageSize }, res => {
      this.setState({
        Researches: res.researchesList,
        PageCount: Math.ceil(res.count! / this.state.PageSize),
        TotalCount:res.count
      })

    }, err => console.log(err)
    )
  }
  handelChangePageNumber(
    e: { selected: number }
  ) {
    this.setState({
      PageNumber: e.selected
    });
    this.GetResearch(e.selected + 1, this.state.PageSize)
  }
  handelChangePageSize(
    e: { label: string; value: number }
  ) {
    this.setState({
      PageSize: e.value
    });
    this.GetResearch(this.state.PageNumber, e.value)
  }
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-baseline">
                <h6 style={{ width: "35%" }}>Research List</h6>
                <InputIcon
                  chilren={
                    <img src="/images/icons/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..." TopPosition="15%"
                ></InputIcon>
              </div>
              <div className="right w-50 d-flex justify-content-end align-items-center">
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
                  placeholder={this.state.PageSize.toString()}
                  onChange={(e) => {
                    this.handelChangePageSize(e)
                  }}
                ></SelectComponent>
              </div>
            </div>
            <AcordienTableResearch
              Items={this.state.Researches}
              Heading={[
                { name: "Research Name", center: false },
                { name: "Deadline", center: false },
                { name: "Status", center: true },
              ]}
              role={this.RoleUser}
            ></AcordienTableResearch>

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
                  pageCount={this.state.PageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={(e) => {
                    this.handelChangePageNumber(e)
                  }}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
              <div className="d-flex justify-content-end flex-fill">
                <p className="text-right mb-0 ">Total Results: {this.state.TotalCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
