import React from "react";
import ReactPaginate from "react-paginate";
import { AdminController } from "../../../controllers/admin/admin_controller";
import { PaymentList } from "../../../data/models/responses/admin/payments_res";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import { PaymentsTbl } from "./component/payment_tbl";
type StateType = {
  Payments: PaymentList[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
  TotalCount: number;
  Search: string;
};

export class AdminPayments extends React.Component {
  controller = new AdminController();
  state: StateType = {
    Payments: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount: 0,
    Search: "",
  };
  componentDidMount() {
    this.GetPayments(this.state.PageNumber, this.state.PageSize);
  }
  GetPayments(PageNumber: number, PageSize: number) {
    this.controller.getPayments(
      {
        pageNumber: PageNumber,
        pageSize: PageSize,
      },
      (res) => {
        this.setState({
          Payments: res.paymentList,
          PageCount: Math.ceil(res.count! / this.state.PageSize),
          TotalCount: res.count,
        });
      }
    );
  }
  handelChangePageNumber(e: { selected: number }) {
    this.setState({
      PageNumber: e.selected,
    });
    this.GetPayments(e.selected + 1, this.state.PageSize);
  }
  handelChangePageSize(e: { label: string; value: number }) {
    this.setState({
      PageSize: e.value,
    });
    this.GetPayments(this.state.PageNumber, e.value);
  }
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-baseline">
                <h6 style={{ width: "35%" }}>Payments</h6>
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
                  children="Payment Setup"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="mx-4"
                  minWidth="200px"
                  minHeight="34px"
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
            <PaymentsTbl
              Items={this.state.Payments}
              Heading={[
                { name: "Payment Amount", center: false },
                { name: "Date", center: true },
                { name: "Client Name", center: true },
                { name: "Client Email", center: true },
                { name: "Status", center: true },
              ]}
            ></PaymentsTbl>

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
