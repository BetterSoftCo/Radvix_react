import React from "react";
import ReactPaginate from "react-paginate";
import { TaskController } from "../../../controllers/task/task_controller";
import {
  AppTask,
} from "../../../data/models/responses/task/get_all_tasks_res";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import AcordienTable from "./component/recent_tasks";
type StateType = {
  Tasks: AppTask[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
  TotalCount: number;
  Search:string
};
export class TasksPage extends React.Component {
  RoleUser = store.getState().userRole;
  controller = new TaskController();
  state: StateType = {
    Tasks: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount: 0,
    Search:''
  };
  componentDidMount() {
    this.GetTasks(this.state.PageNumber, this.state.PageSize);
    store.subscribe(() => {
      this.GetTasks(this.state.PageNumber, this.state.PageSize);
    });
  }
  GetTasks(PageNumber: number, PageSize: number) {
    this.controller.getTasks(
      { PageNumber, PageSize , SearchParameter:this.state.Search },
      (res) => {
        this.setState({
          Tasks: res.appTasks,
          PageCount: Math.ceil(res.count! / this.state.PageSize),
          TotalCount: res.count,
        });
      },
      (err) => console.log(err)
    );
  }
  handelChangePageNumber(e: { selected: number }) {
    this.setState({
      PageNumber: e.selected,
    });
    this.GetTasks(e.selected + 1, this.state.PageSize);
  }
  handelChangePageSize(e: { label: string; value: number }) {
    this.setState({
      PageSize: e.value,
    });
    this.GetTasks(this.state.PageNumber, e.value);
  }
  render() {
    return (
      <div className="container-fluid research task">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
              <div className="left d-flex w-50 align-items-baseline">
                <h6 style={{ width: "35%" }}>Task List</h6>
                <InputIcon
                  chilren={
                    <img src="/images/icons/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."
                  TopPosition="15%"
                  onChange={(e) => {
                    this.setState({
                      Search: e.target.value,
                    });
                    this.GetTasks(this.state.PageNumber, this.state.PageSize)
                  }}
                ></InputIcon>
              </div>
              <div className="right  d-flex justify-content-between align-items-baseline">
                <MainButton
                  children="Discussion Panel"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="px-3"
                ></MainButton>
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
                  placeholder={this.state.PageSize.toString()}
                  onChange={(e) => {
                    this.handelChangePageSize(e);
                  }}
                ></SelectComponent>
              </div>
            </div>
            <AcordienTable
              Tasks={this.state.Tasks}
              role={this.RoleUser}
            ></AcordienTable>

            <div className="d-flex justify-content-between align-items-baseline">
              <div className="d-flex justify-content-end flex-fill mt-3">
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
                    this.handelChangePageNumber(e);
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
