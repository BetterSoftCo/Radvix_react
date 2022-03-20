import React from "react";
import ReactPaginate from "react-paginate";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import DiscusstionListTable from "./component/discusstion_list_table";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { DiscusstionController } from "../../../controllers/discussion/discusstion_controller";
import { Discussion } from "../../../data/models/responses/discussion/get_all_discusstion_res";
type StateType = {
  Discusstion: Discussion[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
  TotalCount: number;
};
class DiscusstionList extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new DiscusstionController();
  state: StateType = {
    Discusstion: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount: 0,
  };
  componentDidMount() {
    this.GetDiscusstion(this.state.PageNumber, this.state.PageSize);
  }
  GetDiscusstion(PageNumber: number, PageSize: number) {
    this.controller.getAllDiscusstion(
      { PageNumber: PageNumber, PageSize: PageSize, ticket: false },
      (res) => {
        this.setState({
          Discusstion: res.discussions,
          PageCount: Math.ceil(res.count! / this.state.PageSize),
          TotalCount: res.count,
        });
      },
      (err) => {}
    );
  }
  handelChangePageNumber(e: { selected: number }) {
    this.setState({
      PageNumber: e.selected,
    });
    this.GetDiscusstion(e.selected + 1, this.state.PageSize);
  }
  handelChangePageSize(e: { label: string; value: number }) {
    this.setState({
      PageSize: e.value,
    });
    this.GetDiscusstion(this.state.PageNumber, e.value);
  }
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6 className="b-title d-flex align-items-center" style={{ width: "90%" }}>
                  <span
                    onClick={() => {
                      window.history.back();
                    }}
                    className="backPage"
                  ></span>{" "}
                  My Discussion Panels
                </h6>
                <InputIcon
                  chilren={
                    <img src="/images/icons/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."
                  TopPosition="15%"
                ></InputIcon>
              </div>
              <div className="right  d-flex justify-content-between align-items-baseline">
                <MainButton
                  children="New discusstion"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="my-2 mx-2 px-2"
                  minWidth="120px"
                  onClick={() => {
                    this.props.history.push(`${AppRoutes.discussion_new.replace(":topic", "1")}`);
                  }}
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
            <DiscusstionListTable
              Items={this.state.Discusstion}
              Heading={["Subject", "Related To", "Update"]}
            ></DiscusstionListTable>

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
export default withRouter(DiscusstionList);
