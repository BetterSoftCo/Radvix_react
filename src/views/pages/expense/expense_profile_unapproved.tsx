import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { UserRoles } from "../../../core/utils";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { expenseController } from "../../../controllers/expense/expense_controller";
import moment from "moment";
interface RouteParams {
  id: string;
}
class ExpensePageProfile extends React.Component<RouteComponentProps<RouteParams>> {
  RoleUser = store.getState().userRole;
  controller = new expenseController();
  state = {
    researchId: 0,
    creatorFirstName: "",
    creatorLastName: "",
    status: "",
    date: new Date(),
    title: "",
    amount: 0,
    description: "",
    appTaskTitle:"",
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
          appTaskTitle:res.appTaskTitle,
          status: res.status === 0 ? "OnGoing" :
            res.status === 1 ? "Delayed" :
              res.status === 2 ? "OnHold" :
                "Completed"
        });
      }
    );
  }
  handelCreateExpenseState(isApproved:boolean){
    this.controller.createState({ expenseId: parseInt(this.props.match.params.id), isApproved: isApproved}, res => {
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
              {this.RoleUser === UserRoles.L1Client || this.RoleUser === UserRoles.L1User ? (
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
            {this.RoleUser === UserRoles.L1Client || this.RoleUser === UserRoles.L1User ? (
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
                  {this.RoleUser === UserRoles.L1Client || this.RoleUser === UserRoles.L1User ? (
                    <MainButton
                      children={this.state.status}
                      type={MainButtonType.light}
                      borderRadius="24px"
                      fontSize="14px"
                      backgroundColor="#C4C4C4"
                    ></MainButton>
                  ) : (
                    <div className="d-flex justify-content-start align-items-center">
                      <MainButton
                        children="Approved"
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#53A501"
                      ></MainButton>
                      <p className="mb-0 mx-2">07/22/2021</p>
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
                    <li>
                      <img src="/images/icons/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                    <li>
                      <img src="/images/icons/word_icon.svg" alt="" />{" "}
                      proposal_general.docx
                    </li>
                    <li>
                      <img src="/images/icons/excel_icon.svg" alt="" />{" "}
                      proposal_general.xlsx
                    </li>
                    <li>
                      <img src="/images/icons/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                    <li>
                      Shared Links:
                      <MainButton
                        children="https://drive.google.com/file/234234"
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#F5F5F5"
                        color="#096BFF"
                      ></MainButton>
                      <MainButton
                        children="https://drive.google.com/file/234234"
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#F5F5F5"
                        color="#096BFF"
                      ></MainButton>
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