import React from "react";
import ReactPaginate from "react-paginate";
import { TaskController } from "../../../controllers/task/task_controller";
import { GetAllTasksResult } from "../../../data/models/responses/task/get_all_tasks_res";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import { AcordienTable } from "./component/recent_tasks";
type StateType = {
  Tasks: GetAllTasksResult[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
};
export class TasksPage extends React.Component {
  RoleUser = store.getState().userRole;
  controller = new TaskController();
  state: StateType = {
    Tasks: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
  };
  componentDidMount() {
    this.GetTasks(this.state.PageNumber, this.state.PageSize);
    store.subscribe(() => {
      this.GetTasks(this.state.PageNumber, this.state.PageSize);
    });
    
  }
  GetTasks(PageNumber: number, PageSize: number) {
    this.controller.getTasks(
      (res) => {
        this.setState({
          Tasks:res,
        })
      },
      (err) => console.log(err)
    );
  }
  render() {
    return (
      <div className="container-fluid research task">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6 style={{ width: "35%" }}>Task List</h6>
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
                <MainButton
                  children="Discussion Panel"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="px-3"
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
            <AcordienTable Tasks={this.state.Tasks} role={this.RoleUser}></AcordienTable>

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
