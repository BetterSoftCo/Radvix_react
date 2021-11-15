/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { InputIcon } from "../../components/search_box";
import ReactPaginate from "react-paginate";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { store } from "../../../data/store";
import { SelectComponent } from "../../components/select_input";
import { UserSignups } from "./component/user_signups";
export class AdminDashboard extends React.Component {
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
                    chilren={<img src="/images/pages/search_box_icon.svg" />}
                    width="100%"
                    height="44px"
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
              <div className="w-100">
                <UserSignups></UserSignups>
              </div>
              <div className="d-flex justify-content-center align-items-center">
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
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
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
            src="/images/pages/members_involved_overview_icon.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-5">253</h1>
            <span className="text-center">Users</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/pages/expense_menu_icon.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-5">$24,234.12</h1>
            <span className="text-center">Since Launch</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/pages/headphones.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-5">13</h1>
            <span className="text-center">Open Tickets</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/pages/equipment_involved_overview_icon.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-5">124</h1>
            <span className="text-center">Projects</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/pages/university.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-5">24</h1>
            <span className="text-center">Institutions </span>
          </div>
        </div>
      </div>
    </div>
  );
};
