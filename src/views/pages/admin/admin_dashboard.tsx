/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { store } from "../../../data/store";
import { ChartAdmin } from "./component/user_signups";
import { IncomeChart } from "./component/income_chart";
import { DateUsage } from "./component/date_usage";

import { ButtonGroup } from "../../components/botton_group";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { AdminController } from "../../../controllers/admin/admin_controller";
import { DashboardReportsResult } from "../../../data/models/responses/admin/dashboard_report_res";
interface StateType {
  data: DashboardReportsResult;
  dateFrom: Date;
  DateTo: Date;
  toggleChart: number;
}
export class AdminDashboard extends React.Component {
  handelChangeDate(target: string, params: any): void {
    this.setState({
      [target]: params,
    });
  }
  controller = new AdminController();
  state: StateType = {
    data: {
      countUsers: 0,
      countOpenTickets: 0,
      countProjects: 0,
      countInstitutions: 0,
      sinceLaunch: 0,
      userSignUps: [],
      dateUsage: [],
      income: [],
    },
    dateFrom: new Date(),
    DateTo: new Date(),
    toggleChart: 2,
  };
  getDashboardReport() {
    this.controller.getDashboardReport(
      {
        fromDate: this.state.dateFrom,
        untilDate: this.state.DateTo,
      },
      (res) => {
        this.setState({
          data: {
            ...res,
            userSignUps: res.userSignUps.map((item) => {
              return [new Date(item.dateTime).getTime(), item.countUsers];
            }),
            dateUsage: res.dateUsage.map((item) => {
              return [new Date(item.dateTime).getTime(), item.countUsers];
            }),
            income: res.income.map((item) => {
              return [new Date(item.dateTime).getTime(), item.countUsers];
            }),
          },
        });
      }
    );
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
    this.render();
    console.log("ssssssss");
  }
  componentDidMount() {
    this.getDashboardReport();
  }
  RoleUser = store.getState().userRole;
  date = new Date();
  render() {
    return (
      <div className="container-fluid dashbord">
        <div className="row">
          <div className="col-12">
            <HeadDashboardPage
              Institutions={this.state.data.countInstitutions}
              Launch={this.state.data.sinceLaunch}
              Projects={this.state.data.countProjects}
              Tickets={this.state.data.countOpenTickets}
              users={this.state.data.countUsers}
            ></HeadDashboardPage>
          </div>
          <div className="col-12">
            <div className="TableBox">
              <div className="TopTableBox d-flex justify-content-between align-items-center">
                <div className="left d-flex w-50 align-items-baseline">
                  <h6 style={{ width: "35%" }}>
                    {this.state.toggleChart === 1
                      ? "Income ($)"
                      : this.state.toggleChart === 2
                      ? "User Signup"
                      : "Data Usage (GB)"}
                  </h6>
                </div>
              </div>
              <div className="w-100 bg-light rounded p-2">
                {this.state.toggleChart === 1 ? (
                  <IncomeChart data={this.state.data.income} />
                ) : this.state.toggleChart === 2 ? (
                  <ChartAdmin data={this.state.data.userSignUps} />
                ) : (
                  <DateUsage data={this.state.data.dateUsage} />
                )}
              </div>
              <div className="row box-content">
                <div className="col-md-5">
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
                      selected={this.state.toggleChart}
                      onChange={(e) => {
                        this.handleChange(
                          "toggleChart",
                          parseInt(e.target.value)
                        );
                      }}
                    ></ButtonGroup>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="mx-2">From</span>
                      <DatePicker
                        selected={this.state.dateFrom}
                        onChange={(e) => {
                          this.handelChangeDate("dateFrom", e);
                        }}
                      />
                      <span className="mx-2">Until</span>
                      <DatePicker
                        selected={this.state.DateTo}
                        onChange={(e) => {
                          this.handelChangeDate("DateTo", e);
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
                      onClick={() => {
                        this.getDashboardReport();
                      }}
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
interface HeadDashboardPageProp {
  users: number;
  Launch: number;
  Tickets: number;
  Projects: number;
  Institutions: number;
}
const HeadDashboardPage: React.FC<HeadDashboardPageProp> = (props) => {
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
            <h1 className="display-5">{props.users}</h1>
            <span className="text-center">Users</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/icons/expense_menu_light_icon.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-5">${props.Launch}</h1>
            <span className="text-center">Since Launch</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/icons/headphones_dark.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-5">{props.Tickets}</h1>
            <span className="text-center">Open Tickets</span>
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
            <h1 className="display-5">{props.Projects}</h1>
            <span className="text-center">Projects</span>
          </div>
        </div>
      </div>
      <div className="overviwe-item">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="/images/icons/university.svg"
            alt="Avatar"
            className="avatar"
          />
          <div className="d-flex flex-column align-items-center">
            <h1 className="display-5">{props.Institutions}</h1>
            <span className="text-center">Institutions </span>
          </div>
        </div>
      </div>
    </div>
  );
};
