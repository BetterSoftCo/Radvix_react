import React from "react";
import ReactPaginate from "react-paginate";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import AcordienTable from "./component/recent_teams";
import { withRouter, RouteComponentProps } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { Team } from "../../../data/models/responses/team/get_all_teams_res";
import { TeamController } from "../../../controllers/team/team_controller";
import { AccessPermition, UserRoles } from "../../../core/utils";
type StateType = {
  Teams: Team[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
  TotalCount: number;
  Search: string;
};
class TeamPage extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new TeamController();
  state: StateType = {
    Teams: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount: 0,
    Search: "",
  };
  componentDidMount() {
    this.GetTeams(this.state.PageNumber, this.state.PageSize);
  }
  GetTeams(PageNumber: number, PageSize: number) {
    this.controller.getAllTeams(
      {
        pageNumber: PageNumber,
        pageSize: PageSize,
        SearchParameter: this.state.Search,
      },
      (res) => {
        const team =
          this.RoleUser === UserRoles.L2User
            ? res.subTeams.map((item) => {
                return {
                  id: item.parentId,
                  title: item.parentTitle,
                  description: "",
                  discussionId: 0,
                  creatorUserId: 0,
                  creatorUserFirstName: item.creatorFirstName,
                  creatorUserLastName: item.creatorLastName,
                  memberCount: item.parentTeamMemberCount,
                  subTeams: res.subTeams
                    .filter((sub) => sub.id === item.id)
                    .map((submap) => {
                      return {
                        id: submap.id,
                        title: submap.title,
                        parentId: submap.parentId,
                        parentTitle: submap.parentTitle,
                        parentTeamMemberCount: submap.parentTeamMemberCount,
                        creatorFirstName: submap.creatorFirstName,
                        creatorLastName: submap.creatorLastName,
                        subTeamMemberCount: submap.subTeamMemberCount,
                      };
                    }),
                };
              })
            : res.teams;
        this.setState({
          Teams: team,
          PageCount: Math.ceil(res.teamCount! / this.state.PageSize),
          TotalCount: res.teamCount,
        });
      }
    );
  }
  handelChangePageNumber(e: { selected: number }) {
    this.setState({
      PageNumber: e.selected,
    });
    this.GetTeams(e.selected + 1, this.state.PageSize);
  }
  handelChangePageSize(e: { label: string; value: number }) {
    this.setState({
      PageSize: e.value,
    });
    this.GetTeams(this.state.PageNumber, e.value);
  }
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6
                  style={{ width: "35%" }}
                  className="b-title d-flex align-items-center"
                >
                  <span
                    onClick={() => {
                      window.history.back();
                    }}
                    className="backPage"
                  ></span>{" "}
                  Team List
                </h6>
                <InputIcon
                  chilren={
                    <img src="/images/pages/Search Box Icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."
                  TopPosition="15%"
                  onChange={(e) => {
                    this.setState({
                      Search: e.target.value,
                    });
                    this.GetTeams(this.state.PageNumber, this.state.PageSize);
                  }}
                ></InputIcon>
              </div>
              <div className="right  d-flex justify-content-between align-items-baseline">
                {AccessPermition(this.RoleUser, [
                  UserRoles.Admin,
                  UserRoles.L1Client,
                  UserRoles.L1User,
                ]) ? (
                  <MainButton
                    children="New Team"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="11px"
                    minWidth="100px"
                    onClick={() => {
                      this.props.history.push(AppRoutes.new_team);
                    }}
                  ></MainButton>
                ) : this.RoleUser === UserRoles.L2User ? (
                  <MainButton
                    children="Only Subteam"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="11px"
                    minWidth="100px"
                    onClick={() => {
                      this.props.history.push(AppRoutes.new_team);
                    }}
                  ></MainButton>
                ) : null}

                <MainButton
                  children="Member"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  minWidth="100px"
                  fontSize="14px"
                  onClick={() => {
                    this.props.history.push(AppRoutes.member);
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
            <AcordienTable
              Teams={this.state.Teams}
              role={this.RoleUser}
            ></AcordienTable>
            <div className="d-flex justify-content-between align-items-baseline">
              <div className="d-flex justify-content-end flex-fill mt-3">
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
export default withRouter(TeamPage);
