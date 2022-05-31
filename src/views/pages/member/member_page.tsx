import React from "react";
import ReactPaginate from "react-paginate";
import { RouteComponentProps, withRouter } from "react-router";
import { MemberController } from "../../../controllers/member/member_controller";
import { AppRoutes } from "../../../core/constants";
import { AccessPermition, UserRoles } from "../../../core/utils";
import { Member } from "../../../data/models/responses/member/member_list_res";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import Memberitem from "./component/member_item";
type StateType = {
  Members: Member[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
  TotalCount: number;
  Search: string;
};
class MemberPage extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new MemberController();
  state: StateType = {
    Members: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount: 0,
    Search: "",
  };
  componentDidMount() {
    this.GetMember(this.state.PageNumber, this.state.PageSize);
  }
  GetMember(PageNumber: number, PageSize: number) {
    this.controller.getMemberList(
      {
        PageNumber: PageNumber,
        PageSize: PageSize,
        SearchParameter: this.state.Search,
      },
      (res) => {
        this.setState({
          Members: res.members,
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
            <div className="TopTableBox d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
              <div className="left d-flex w-50 align-items-center ">
                <h4
                  style={{ width: "45%", fontSize: "16px" }}
                  className="b-title d-flex align-items-center"
                >
                  <span
                    onClick={() => {
                      window.history.back();
                    }}
                    className="backPage"
                  ></span>{" "}
                  Members
                </h4>
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
                      this.state.PageSize
                    );
                  }}
                ></InputIcon>
              </div>
              <div className="right  d-flex justify-content-between align-items-baseline">
                {AccessPermition(this.RoleUser, [
                  UserRoles.Admin,
                  UserRoles.L1Client,
                  UserRoles.L1User,
                  UserRoles.L2User,
                ]) ? (
                  <MainButton
                    children="New Member"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="12px"
                    className="my-2"
                    minWidth="100px"
                    onClick={() => {
                      this.props.history.push(AppRoutes.member_new);
                    }}
                  ></MainButton>
                ) : null}

                <MainButton
                  children="Teams"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="12px"
                  minWidth="100px"
                  className="my-2"
                  onClick={() => {
                    this.props.history.push(AppRoutes.team);
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
            <div className="row">
              {this.state.Members.map((item) => (
                <Memberitem
                  role={this.RoleUser}
                  key={item.id}
                  member={item}
                ></Memberitem>
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
                <p className="text-right mb-0 ">
                  Total Results: {this.state.TotalCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MemberPage);
