/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { store } from "../../../data/store";
import { UserSignups } from "./component/user_signups";
import { ButtonGroup } from "../../components/botton_group";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
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
  RoleUser = store.getState().user;
  date = new Date();
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
                  <h6 style={{ width: "35%" }}>User Signups</h6>
                </div>
              </div>
              <div className="w-100 bg-light rounded p-2">
                <UserSignups></UserSignups>
              </div>
              <div className="row box-content">
                <div className="col-md-6">
                  <div className="item ">
                    <ButtonGroup
                      name="AccessLevel"
                      items={[
                        { name: "Income ($) ", value: 1 },
                        { name: "User Signup ", value: 2 },
                        { name: "Data Usage (GB) ", value: 3 },
                      ]}
                      TextItem="name"
                      ValueItem="value"
                    ></ButtonGroup>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="mx-2">From</span>
                      <DatePicker
                        selected={this.date}
                        onChange={() => {
                          console.log("s");
                        }}
                      />
                      <span className="mx-2">Until</span>
                      <DatePicker
                        selected={this.date}
                        onChange={() => {
                          console.log("s");
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item mt-4">
                    <MainButton
                      type={MainButtonType.dark}
                      children={"Reset"}
                      borderRadius="50px"
                      fontSize="15px"
                      className="mx-2"
                      minHeight="29px"
                      minWidth="100px"
                    ></MainButton>
                    <MainButton
                      type={MainButtonType.dark}
                      children={"Apply"}
                      borderRadius="50px"
                      fontSize="15px"
                      className="mx-2"
                      minHeight="29px"
                      minWidth="100px"
                    ></MainButton>
                  </div>
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
