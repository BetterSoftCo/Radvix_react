import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { expenseController } from "../../../controllers/expense/expense_controller";
import moment from "moment";
import { AccessPermition, UserRoles } from "../../../core/utils";
import { GetExpenseByIDResult } from "../../../data/models/responses/expense/expense_by_id_res";
interface RouteParams {
  id: string;
}
class ExpensePageProfile extends React.Component<RouteComponentProps<RouteParams>> {
  RoleUser = store.getState().userRole;
  controller = new expenseController();
  state: GetExpenseByIDResult = {
    id: parseInt(this.props.match.params.id),
    title: "",
    appTaskTitle: "",
    creatorFirstName: "",
    creatorLastName: "",
    status: 0,
    date: new Date(),
    medias: [],
    amount: 0,
    description: "",
  };
  componentDidMount() {
    this.controller.getExpenseById(
      { id: parseInt(this.props.match.params.id) },
      (res) => {
        this.setState({
          creatorFirstName: res.creatorFirstName,
          creatorLastName: res.creatorLastName,
          date: res.date,
          title: res.title,
          amount: res.amount,
          description: res.description,
          appTaskTitle: res.appTaskTitle,
          medias: res.medias,
          status: res.status
        });
      }
    );
  }
  handelCreateExpenseState(isApproved: boolean) {
    this.controller.createState({ expenseId: parseInt(this.props.match.params.id), isApproved: isApproved }, res => {
      this.props.history.push(`${AppRoutes.expense}`)
    }, err => console.log(err)
    )
  }
  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="b-title d-flex align-items-center">
              <span onClick={() => { window.history.back() }} className="backPage"></span> {"Expense Profile"}
              {AccessPermition(this.RoleUser, [
                UserRoles.Admin,
                UserRoles.L1Client,
                UserRoles.L1User,
              ]) ? (
                <CircleIcon
                  width="22px"
                  height="22px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="#474747"
                  fontSize="10px"
                  color="#ffff"
                  className="mx-4 pointer"
                >
                  <img src="/images/icons/edit.svg" alt="radvix" />
                </CircleIcon>
              ) : null}
            </h5>
            <MainButton
              children="Discussion Panel"
              type={MainButtonType.dark}
              borderRadius="24px"
              fontSize="14px"
              className="px-3"
              onClick={() => { this.props.history.push(AppRoutes.discussion) }}
            ></MainButton>
          </div>
          <div className="Studying p-4 my-2">
            <h3 className="px-5 text-center">
              Purchasing Tickets For {this.state.title}
            </h3>
            {AccessPermition(this.RoleUser, [
              UserRoles.Admin,
              UserRoles.L1Client,
              UserRoles.L1User,
            ]) &&  this.state.status !== 3? (
              <div className="d-flex justify-content-center align-items-center mt-3">
                <MainButton
                  children="Decline"
                  type={MainButtonType.light}
                  borderRadius="24px"
                  fontSize="14px"
                  className="mx-3 px-3"
                  minHeight="34px"
                  backgroundColor="#F5C602"
                  onClick={() => { this.handelCreateExpenseState(false) }}
                ></MainButton>
                <MainButton
                  children="Approve"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="mx-3 px-3"
                  minHeight="34px"
                  backgroundColor="#53A501"
                  onClick={() => { this.handelCreateExpenseState(true) }}
                ></MainButton>
              </div>
            ) : null}
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-4 t-title mb-0 border-t-l">Status</h6>
                <div className="col-8 t-desc border-t-r">
                  {AccessPermition(this.RoleUser, [
                    UserRoles.L3User,
                    UserRoles.L2User,
                  ]) ? (
                    <MainButton
                      children={this.state.status?.isStatus()}
                      type={MainButtonType.light}
                      borderRadius="24px"
                      fontSize="14px"
                      backgroundColor="#C4C4C4"
                    ></MainButton>
                  ) : (
                    <div className="d-flex justify-content-start align-items-center">
                      <MainButton
                        children={this.state.status?.isStatus()}
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#53A501"
                      ></MainButton>
                      <p className="mb-0 mx-2">{moment(this.state.date).format("YYYY/MM/DD")}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Associated Task</h6>
                <div className="col-8 t-desc">{this.state.appTaskTitle}</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Requested by</h6>
                <div className="col-8 t-desc">{this.state.creatorFirstName} {this.state.creatorLastName}</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Receipt Date</h6>
                <div className="col-8 t-desc">{moment(this.state.date).format("YYYY/MM/DD")}</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Description </h6>
                <div className="col-8 t-desc">
                  {this.state.description}
                </div>
              </div>

              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">Receipt Files</h6>
                <div className="col-8 t-desc border-b-r">
                  {" "}
                  <ul className="file-list">
                    {this.state.medias?.filter(item => !item.externalUrl).map(item => (
                      <li key={item.id}>
                         <img
                            src={`/images/icons/${item?.inputDataType?.isMedia()}`}
                            alt=""
                            width={20}
                            height={20}
                          />{" "}
                          {item.name}
                      </li>
                    ))}
                    <li>
                      Shared Links:
                      {this.state.medias?.filter(item => item.externalUrl).map(item => (
                        <div key={item.id}>
                          <MainButton
                            children={item.externalUrl}
                            type={MainButtonType.dark}
                            borderRadius="24px"
                            fontSize="14px"
                            backgroundColor="#F5F5F5"
                            color="#096BFF"
                          ></MainButton>
                        </div>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Amount row">
                <div className="col-3 d-flex justify-content-center align-items-center title">
                  Amount
                </div>
                <div className="col-9 d-flex justify-content-start align-items-center price">
                  ${this.state.amount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ExpensePageProfile)