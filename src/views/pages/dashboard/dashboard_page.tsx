/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { InputIcon } from "../../components/search_box";
import TableComponent from "./component/table_comonent";
import ReactPaginate from "react-paginate";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import AcordienTable from "./recent_tasks";
import AcordienTableData from "./recent_data";
import { store } from "../../../data/store";
import { SelectComponent } from "../../components/select_input";
import { ResearchController } from "../../../controllers/research/research_controller";
import { ResearchesList } from "../../../data/models/responses/research/researches_res";
import { AppTask } from "../../../data/models/responses/task/get_all_tasks_res";
import { TaskController } from "../../../controllers/task/task_controller";
import { DataList } from "../../../data/models/responses/data/get_all_data_res";
import { DataController } from "../../../controllers/data/data_controller";
import { LocalDataSources } from "../../../data/local_datasources";
import { MemberController } from "../../../controllers/member/member_controller";
type StateType = {
  Researches: ResearchesList[];
  ResearchesPageNumber: number;
  ResearchesPageSize: number;
  ResearchesPageCount: number;
  ResearchesTotalCount: number;
  Tasks: AppTask[];
  TasksPageNumber: number;
  TasksPageSize: number;
  TasksPageCount: number;
  TasksTotalCount: number;
  Datas: DataList[];
  DatasPageNumber: number;
  DatasPageSize: number;
  DatasPageCount: number;
  DatasTotalCount: number;
};
export class DashboardPage extends React.Component {
  handlePageClick = (data: any) => {};
  RoleUser = store.getState().userRole;
  private researchController = new ResearchController();
  private taskcontroller = new TaskController();
  private Datacontroller = new DataController();
  private memberController: MemberController = new MemberController();
  local = new LocalDataSources();
  state: StateType = {
    Researches: [],
    ResearchesPageNumber: 1,
    ResearchesPageSize: 10,
    ResearchesPageCount: 0,
    ResearchesTotalCount: 0,
    Tasks: [],
    TasksPageNumber: 1,
    TasksPageSize: 10,
    TasksPageCount: 0,
    TasksTotalCount: 0,
    Datas: [],
    DatasPageNumber: 1,
    DatasPageSize: 10,
    DatasPageCount: 0,
    DatasTotalCount: 0,
  };
  componentDidMount() {
    if (store.getState().ResearchId >= 0) {
      this.GetResearch(
        this.state.ResearchesPageNumber,
        this.state.ResearchesPageSize
      );
      this.GetTasks(this.state.TasksPageNumber, this.state.TasksPageSize);
      this.GetDatas(this.state.DatasPageNumber, this.state.DatasPageSize);
    }
    store.subscribe(() => {
      if (store.getState().ResearchId >= 0) {
        this.GetResearch(
          this.state.ResearchesPageNumber,
          this.state.ResearchesPageSize
        );
        this.GetTasks(this.state.TasksPageNumber, this.state.TasksPageSize);
        this.GetDatas(this.state.DatasPageNumber, this.state.DatasPageSize);
      }
    });
  }
  GetResearch(PageNumber: number, PageSize: number) {
    if (this.local.logedin()) {
      this.researchController.getResearches(
        { PageNumber: PageNumber, PageSize: PageSize },
        (res) => {
          this.setState({
            Researches: res.researchesList,
            ResearchesPageCount: Math.ceil(
              res.count! / this.state.ResearchesPageSize
            ),
            ResearchesTotalCount: res.count,
          });
        },
        (err) => {
          console.log("GetResearch dash");
        }
      );
    }
  }
  GetTasks(PageNumber: number, PageSize: number) {
    this.taskcontroller.getTasks(
      { PageNumber, PageSize },
      (res) => {
        this.setState({
          Tasks: res.appTasks,
          TasksPageCount: Math.ceil(res.count! / this.state.TasksPageSize),
          TasksTotalCount: res.count,
        });
      },
      (err) => console.log(err)
    );
  }
  GetDatas(PageNumber: number, PageSize: number) {
    this.Datacontroller.getAllData(
      { PageNumber, PageSize },
      (res) => {
        this.setState({
          Datas: res.dataLists,
          DatasPageCount: Math.ceil(res.count! / this.state.DatasPageSize),
          DatasTotalCount: res.count,
        });
      },
      (err) => console.log(err)
    );
  }
  handelChangePageNumber(e: { selected: number }, Type: string) {
    if (Type === "Researches") {
      this.setState({
        ResearchesPageNumber: e.selected,
      });
      this.GetResearch(e.selected + 1, this.state.ResearchesPageSize);
    } else if (Type === "Tasks") {
      this.setState({
        TasksPageNumber: e.selected,
      });
      this.GetTasks(e.selected + 1, this.state.TasksPageSize);
    } else {
      this.setState({
        DatasPageNumber: e.selected,
      });
      this.GetDatas(e.selected + 1, this.state.DatasPageSize);
    }
  }
  handelChangePageSize(e: { label: string; value: number }, Type: string) {
    if (Type === "Researches") {
      this.setState({
        ResearchesPageSize: e.value,
      });
      this.GetResearch(this.state.ResearchesPageNumber, e.value);
    } else if (Type === "Tasks") {
      this.setState({
        TasksPageSize: e.value,
      });
      this.GetTasks(this.state.TasksPageNumber, e.value);
    } else {
      this.setState({
        DatasPageSize: e.value,
      });
      this.GetDatas(this.state.DatasPageNumber, e.value);
    }
  }
  render() {
    return (
      <div className="container-fluid dashbord">
        <div className="row">
          <div className="col-12">
            <HeadDashboardPage></HeadDashboardPage>
          </div>
          <div className="col-12">
            <div className="TableBox">
              <div className="TopTableBox d-flex justify-content-between align-items-center">
                <div className="left d-flex w-50 align-items-baseline">
                  <h6 style={{ width: "45%" }}>Research Updates</h6>
                  <InputIcon
                    chilren={<img src="/images/icons/search_box_icon.svg" />}
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
                    placeholder={this.state.ResearchesPageSize.toString()}
                    onChange={(e) => {
                      this.handelChangePageSize(e, "Researches");
                    }}
                  ></SelectComponent>
                </div>
              </div>
              <TableComponent
                Heading={["Update", "Date"]}
                Items={this.state.Researches}
              ></TableComponent>
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
                    pageCount={this.state.ResearchesPageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(e) => {
                      this.handelChangePageNumber(e, "Researches");
                    }}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
                <div className="d-flex justify-content-end flex-fill">
                  <p className="text-right mb-0 ">
                    Total Results: {this.state.ResearchesTotalCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="TableBox">
              <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
                <div className="left d-flex w-50 align-items-baseline">
                  <h6 style={{ width: "35%" }}>Recent Tasks</h6>
                  <InputIcon
                    chilren={<img src="/images/icons/search_box_icon.svg" />}
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
                    placeholder={this.state.TasksPageSize.toString()}
                    onChange={(e) => {
                      this.handelChangePageSize(e, "Tasks");
                    }}
                  ></SelectComponent>
                </div>
              </div>
              <AcordienTable
                role={this.RoleUser}
                tasks={this.state.Tasks}
              ></AcordienTable>
              <div className="d-flex justify-content-between align-items-baseline my-2">
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
                    pageCount={this.state.TasksPageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(e) => {
                      this.handelChangePageNumber(e, "Tasks");
                    }}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
                <div className="d-flex justify-content-end flex-fill">
                  <p className="text-right mb-0 ">
                    Total Results: {this.state.TasksTotalCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="TableBox">
              <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
                <div className="left d-flex w-50 align-items-baseline">
                  <h6 style={{ width: "45%" }}>Recent Data Sets</h6>
                  <InputIcon
                    chilren={<img src="/images/icons/search_box_icon.svg" />}
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
                    placeholder={this.state.DatasPageSize.toString()}
                    onChange={(e) => {
                      this.handelChangePageSize(e, "Datas");
                    }}
                  ></SelectComponent>
                </div>
              </div>

              <AcordienTableData
                role={this.RoleUser}
                Datas={this.state.Datas}
              ></AcordienTableData>
              <div className="d-flex justify-content-between align-items-baseline my-2">
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
                    pageCount={this.state.DatasPageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(e) => {
                      this.handelChangePageNumber(e, "Datas");
                    }}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
                <div className="d-flex justify-content-end flex-fill">
                  <p className="text-right mb-0 ">
                    Total Results: {this.state.DatasTotalCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const HeadDashboardPage: React.FC = () => {
  return (
    <div className="overviwe d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-center">
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/icons/members_involved_overview_icon.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-6 fw-bold mb-0">12</h1>
            <span className="text-center">
              Users <br /> Involved
            </span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/icons/equipment_involved_overview_icon.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-6  fw-bold mb-0">8</h1>
            <span className="text-center">
              Equipment <br /> Available
            </span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/Images/icons/compeleted_tasks_verview_icon.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-6  fw-bold mb-0">18</h1>
            <span className="text-center">
              Tasks <br /> Completed
            </span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/icons/pending_tasks_overview_icon.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-6  fw-bold mb-0">45</h1>
            <span className="text-center">
              Tasks <br /> Pending
            </span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/icons/project_deadline_overview_icon.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-6  fw-bold mb-0">87</h1>
            <span className="text-center">
              Days Left <br /> To Deadline
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
