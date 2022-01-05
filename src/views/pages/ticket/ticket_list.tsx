import React from "react";
import ReactPaginate from "react-paginate";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import  MyTicketTable  from "./component/my_tickets";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
class TicketPage extends React.Component<RouteComponentProps> {
  RoleUser = store.getState();
  state = {
    Data: {
      Items: [
        {
          name: "Problem with saving the projects",
          Institution: "1253335",
          Category: "07/22/2021   17:13",
          Eqiups: "1 message",
          status: "open",
        },
        {
          name: "Problem with saving the projects",
          Institution: "1253335",
          Category: "07/22/2021   17:13",
          Eqiups: "1 message",
          status: "open",
        },
        {
          name: "Problem with saving the projects",
          Institution: "1253335",
          Category: "07/22/2021   17:13",
          Eqiups: "1 message",
          status: "open",
        },
        {
          name: "Problem with saving the projects",
          Institution: "1253335",
          Category: "07/22/2021   17:13",
          Eqiups: "1 message",
          status: "open",
        },
      ],
    },
  };
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6 style={{ width: "35%" }}>My Tickets</h6>
                <InputIcon
                  chilren={
                    <img src="/images/pages/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."
                ></InputIcon>
              </div>
              <div className="right w-50 d-flex justify-content-end align-items-center">
                <MainButton
                  children="New Ticket"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="mx-4"
                  onClick={() => {
                    this.props.history.push(AppRoutes.ticketing_new);
                  }}
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
            <MyTicketTable
              Items={this.state.Data.Items}
              Heading={["Subject", "Ticket #", "Date", "Update", "Status"]}
            ></MyTicketTable>

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
export default withRouter(TicketPage);
