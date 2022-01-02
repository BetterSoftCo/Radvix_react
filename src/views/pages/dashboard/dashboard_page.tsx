/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { InputIcon } from "../../components/search_box";
import  TableComponent  from "./component/table_comonent";
import ReactPaginate from "react-paginate";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import  AcordienTable  from "./recent_tasks";
import  AcordienTableData  from "./recent_data";
import { store } from "../../../data/store";
import { SelectComponent } from "../../components/select_input";
import { DashboardController } from "./dashboard_controller";
export class DashboardPage extends React.Component {
  controller: DashboardController = new DashboardController();

  handlePageClick = (data: any) => {};
  mockData = [
    {
      data: { name: "[1](1) Height: 25px." },
      height: 25,
      children: [
        {
          data: { name: "[2](1)" },
          children: [
            {
              data: { name: "[3](1)" },
            },
            {
              data: { name: "[3](2)" },
            },
            {
              data: { name: "[3](3)" },
            },
          ],
        },
        {
          data: { name: "[2](2) Height: 40px." },
          height: 40,
        },
      ],
    },
    {
      data: { name: "[1](2) Height: 30px." },
      height: 30,
    },
    {
      data: { name: "[1](3) Height: 30px." },
      height: 30,
    },
  ];
  RoleUser = store.getState();

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
                <div className="left d-flex w-50 align-items-center">
                  <h6 style={{ width: "35%" }}>Research Updates</h6>
                  <InputIcon
                    chilren={<img src='/images/pages/search_box_icon.svg' />}
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
              <TableComponent
                Heading={["Update", "Date"]}
                Items={[1, 2, 3, 4]}
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
          <div className="col-12">
            <div className="TableBox">
              <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
                <div className="left d-flex w-50 align-items-center">
                  <h6 style={{ width: "35%" }}>Recent Tasks</h6>
                  <InputIcon
                    chilren={<img src='/images/pages/search_box_icon.svg' />}
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
              <AcordienTable role={this.RoleUser} tasks={this.controller.recentTasks}></AcordienTable>
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
          <div className="col-12">
            <div className="TableBox">
              <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
                <div className="left d-flex w-50 align-items-center">
                  <h6 style={{ width: "35%" }}>Recent Data Sets</h6>
                  <InputIcon
                    chilren={<img src='/images/pages/search_box_icon.svg' />}
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

              <AcordienTableData></AcordienTableData>
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
            src='images/pages/members_involved_overview_icon.svg'
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-6 fw-bold mb-0">12</h1>
            <span className="text-center">Users <br /> Involved</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src='images/pages/equipment_involved_overview_icon.svg'
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-6  fw-bold mb-0">8</h1>
            <span className="text-center">Equipment <br /> Available</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src='/images/layout/compeleted_tasks_verview_icon.svg'
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-6  fw-bold mb-0">18</h1>
            <span className="text-center">Tasks <br /> Completed</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src='/images/pages/pending_tasks_overview_icon.svg'
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-6  fw-bold mb-0">45</h1>
            <span className="text-center">Tasks <br /> Pending</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src='/images/layout/project_deadline_overview_icon.svg'
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-6  fw-bold mb-0">87</h1>
            <span className="text-center">Days Left <br /> To Deadline</span>
          </div>
        </div>
      </div>
    </div>
  );
};
