import React from "react";
import ReactPaginate from "react-paginate";
import { RouteComponentProps } from "react-router";
import { MemberController } from "../../../controllers/member/member_controller";
import { AppRoutes } from "../../../core/constants";
import { Member } from "../../../data/models/responses/member/member_list_res";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
type StateType = {
  Members: Member[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
  TotalCount: number;
};
export class MemberPage extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new MemberController();
  state: StateType = {
    Members: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount: 0,
  };
  componentDidMount() {
    this.GetMember(this.state.PageNumber, this.state.PageSize);
  }
  GetMember(PageNumber: number, PageSize: number) {
    this.controller.getMemberList(
      { PageNumber: PageNumber, PageSize: PageSize },
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
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-center ">
                <h4 style={{ width: "45%" }} className="b-title d-flex">
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
                ></InputIcon>
              </div>
              <div className="right w-50 d-flex justify-content-end align-items-center">
                <MainButton
                  children="New Member"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="my-2"
                  onClick={()=>{this.props.history.push(AppRoutes.member_new)}}
                ></MainButton>
                <MainButton
                  children="Teams"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="my-2"
                  onClick={()=>{this.props.history.push(AppRoutes.team)}}
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
                <MemberItem member={item}></MemberItem>
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
interface IMemberItem {
  member: Member;
}
const MemberItem: React.FC<IMemberItem> = (props) => (
  <div className="col-md-3 d-flex justify-content-center align-items-center flex-column mb-3">
    <img
      src={
        props.member.profileImage
          ? props.member.profileImage
          : "/images/images/img_avatar.png"
      }
      alt="Avatar"
      className="rounded-circle avatar"
      width="125px"
      height="125px"
    />

    <h5 className="mt-2 fw-light">
      {props.member.firstName + " " + props.member.lastName}
    </h5>
    <hr className="w-100 my-0" />
    <MainButton
      children="Principal Investigator"
      type={MainButtonType.dark}
      borderRadius="24px"
      fontSize="14px"
      className="my-2"
    ></MainButton>
    <h6 className="fw-light">Structural And Material Lab</h6>
    <div className="d-flex justify-content-center align-items-center">
      <CircleIcon
        width="26px"
        height="26px"
        type={ThemeCircleIcon.dark}
        onClick={() => {
          console.log("ssss");
        }}
        className="pointer mx-1"
      >
        <img src="/images/icons/edit.svg" alt="radvix" />
      </CircleIcon>
      <CircleIcon
        width="26px"
        height="26px"
        type={ThemeCircleIcon.dark}
        onClick={() => {
          console.log("ssss");
        }}
        className="pointer mx-1"
      >
        <img
          src="/images/icons/google_docs.svg"
          alt="radvix"
          width={12}
          height={12}
        />
      </CircleIcon>
    </div>
  </div>
);
