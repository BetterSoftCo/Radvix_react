import React from "react";
import ReactPaginate from "react-paginate";
import { RouteComponentProps, withRouter } from "react-router";
import { AdminController } from "../../../controllers/admin/admin_controller";
import { MemberUser } from "../../../data/models/responses/admin/list_member_user_res";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import MemberItem from "./component/member_item";
type StateType = {
  Members: MemberUser[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
  TotalCount: number;
  Search: string;
  userName: string;
};
interface RouteParams {
  id: string;
  name: string;
}
class AdminMember extends React.Component<RouteComponentProps<RouteParams>> {
  controller = new AdminController();
  state: StateType = {
    Members: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount: 0,
    Search: "",
    userName: "",
  };
  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let name = params.get("name");
    this.setState({
      userName: name,
    });

    this.GetMember(this.state.PageNumber, this.state.PageSize);
  }
  GetMember(PageNumber: number, PageSize: number) {
    this.controller.getListMembers(
      {
        pageNumber: PageNumber,
        pageSize: PageSize,
        searchParameter: this.state.Search,
        userId: this.props.match.params.id,
      },
      (res) => {
        this.setState({
          Members: res.members,
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
    this.GetMember(e.selected + 1, this.state.PageSize);
  }
  handelChangePageSize(e: { label: string; value: number }) {
    this.setState({
      PageSize: e.value,
    });
    this.GetMember(this.state.PageNumber, e.value);
  }
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-baseline ">
                <h4
                  style={{ width: "100%" }}
                  className="b-title d-flex align-items-center"
                >
                  <span
                    onClick={() => {
                      window.history.back();
                    }}
                    className="backPage"
                  ></span>{" "}
                  Members On{" "}
                  <span style={{ color: "#009BB7" }} className="mx-1">
                    {this.state.userName}
                  </span>{" "}
                  Subscription
                </h4>
              </div>
              <div className="right w-50 d-flex justify-content-end align-items-center">
                <InputIcon
                  chilren={
                    <img src="/images/icons/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."
                  TopPosition="15%"
                  onChange={(e) => {
                    this.setState({
                      Search: e.target.value,
                    });
                    this.GetMember(
                      this.state.PageNumber,
                      this.state.PageSize,
                    );
                  }}
                ></InputIcon>
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
                  className="mx-2"
                ></SelectComponent>
              </div>
            </div>
            <div className="row">
              {this.state.Members.map((item) => (
                <MemberItem key={item.id} member={item}></MemberItem>
              ))}
            </div>

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
export default withRouter(AdminMember);
