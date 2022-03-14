import React from "react";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { BoxAlert } from "../../components/box_alert";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { TeamController } from "../../../controllers/team/team_controller";
import SimpleReactValidator from "simple-react-validator";
import { AccessPermition, UserRoles } from "../../../core/utils";
import { TeamCreateReq } from "../../../data/models/requests/team/team_create_req";
type StateType = {
  title: string;
  description: string;
  managersId: string[];
  usersId: string[];
  laboratoriesId: number[];
  equipmentsId: number[];
  researchesId: number[];
  teamId: number;
  subTeamId: number;
  listManagers: Array<{ label: string; value: string } | {}>;
  listUsers: Array<{ label: string; value: string } | {}>;
  listLaboratories: Array<{ label: string; value: number } | {}>;
  listResearch: Array<{ label: string; value: number } | {}>;
  listTeam: Array<{ label: string; value: number } | {}>;
  loading: boolean;
};
class TeamPageNew extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new TeamController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  state: StateType = {
    title: "",
    description: "",
    managersId: [],
    usersId: [],
    laboratoriesId: [],
    equipmentsId: [],
    researchesId: [],
    subTeamId: 0,
    listLaboratories: [],
    listManagers: [],
    listResearch: [],
    listTeam: [],
    listUsers: [],
    loading: false,
    teamId: 0,
  };
  componentDidMount() {
    console.log(this.RoleUser , 'role');
    
    this.controller.TeamSearch((res) => {
      this.setState({
        listLaboratories: res.laboratories.map((item) => {
          return { label: item.title, value: item.id };
        }),
        listManagers: res.managers
          ? res.managers.map((item) => {
              return {
                label: item.firstName + " " + item.lastName,
                value: item.userId,
              };
            })
          : [],
        listResearch: res.researches.map((item) => {
          return { label: item.title, value: item.id };
        }),
        listTeam: res.teams
          ? res.teams.map((item) => {
              return { label: item.title, value: item.id };
            })
          : [],
        listUsers: res.users.map((item) => {
          return {
            label: item.firstName + " " + item.lastName,
            value: item.id,
          };
        }),
      });
    });
    console.log(this.state.listTeam);
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelChangeSelect(
    target: string,
    e: Array<{ label: string; value: number }>
  ) {
    this.setState({ [target]: e.map((item) => item.value) });
  }
  handelChangeSelectSigle(target: string, e: { label: string; value: number }) {
    this.setState({ [target]: e.value });
  }
  handelCreateTeam() {
    if (this.validator.allValid()) {
      const body: TeamCreateReq = {
        title: this.state.title,
        description: this.state.description,
        managersId: this.state.managersId,
        usersId: this.state.usersId,
        laboratoriesId: this.state.laboratoriesId,
        equipmentsId: this.state.equipmentsId,
        researchesId: this.state.researchesId,
        teamId: this.state.teamId,
      };
      this.setState({
        loading: true,
      });
      this.controller.createTeam(
        body,
        (res) => {
          this.props.history.push(
            `${AppRoutes.team_profile.replace(":id", res.id.toString())}`
          );
          this.setState({
            title: "",
            description: "",
            managersId: [],
            usersId: [],
            laboratoriesId: [],
            equipmentsId: [],
            researchesId: [],
            teamId: 0,
            listLaboratories: [],
            listManagers: [],
            listResearch: [],
            listUsers: [],
            loading: false,
          });
        },
        (err) => {
          this.setState({
            loading: false,
          });
        }
      );
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <h5 className="b-title d-flex">
            <span
              onClick={() => {
                window.history.back();
              }}
              className="backPage"
            ></span>{" "}
            {AccessPermition(this.RoleUser, [
              UserRoles.Admin,
              UserRoles.L1Client,
              UserRoles.L1User,
            ])
              ? "Create A New Team"
              : "Create A New Subteam"}
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Team Name:"
                      : "Subteam Name:"
                  }
                  popQuestion="Team Name:"
                  onChange={(e) => {
                    this.handleChange("title", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Team Name",
                    this.state.title,
                    "required"
                  )}
                ></InputComponent>
              </div>

              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label=" Description:"
                  optional="optional"
                  popQuestion=" Description:"
                  className="mt-2"
                  onChange={(e) => {
                    this.handleChange("description", e.target.value);
                  }}
                ></InputComponent>
              </div>

              {AccessPermition(this.RoleUser, [
                UserRoles.Admin,
                UserRoles.L1Client,
                UserRoles.L1User,
              ]) ? (
                <>
                  {" "}
                  <div className="item">
                    <SelectComponent
                      items={this.state.listManagers}
                      TextItem="name"
                      ValueItem="id"
                      className="my-2"
                      placeholder="Click to see the list…"
                      label=" Team Manager (s):"
                      popQuestion=" Team Manager (s):"
                      optional="optional"
                      onChange={(e) => {
                        this.handelChangeSelect("managersId", e);
                      }}
                      isMulti
                    ></SelectComponent>
                  </div>{" "}
                  <BoxAlert
                    text="No Member Has Been Added Yet! 
                (You will automatically be added as a team manager)"
                  ></BoxAlert>{" "}
                </>
              ) : (
                <div className="item">
                  <SelectComponent
                    items={this.state.listTeam}
                    TextItem="name"
                    ValueItem="id"
                    className="my-2"
                    placeholder="Click to see the list…"
                    label=" Choose The parent Subteam"
                    popQuestion=" Choose The parent Subteam"
                    optional="optional"
                    onChange={(e) => {
                      this.handelChangeSelectSigle("teamId", e);
                    }}
                    isMulti={false}
                  ></SelectComponent>
                </div>
              )}
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <SelectComponent
                  items={this.state.listUsers}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Add Members To This Team:"
                      : "Add Members To This subteam::"
                  }
                  popQuestion={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Add Members To This Team:"
                      : "Add Members To This subteam::"
                  }
                  optional=""
                  onChange={(e) => {
                    this.handelChangeSelect("usersId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <BoxAlert text="No Members Have Been Added Yet!"></BoxAlert>
              <div className="item">
                <SelectComponent
                  items={this.state.listLaboratories}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  popQuestion={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Assign Team To Labs (Equips):"
                      : "Assign Subteam To Labs (Equips):"
                  }
                  label={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Assign Team To Labs (Equips):"
                      : "Assign Subteam To Labs (Equips):"
                  }
                  optional="optional"
                  onChange={(e) => {
                    this.handelChangeSelect("laboratoriesId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <BoxAlert text="No Members Have Been Added Yet!"></BoxAlert>
              <div className="item">
                <SelectComponent
                  items={this.state.listResearch}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Assign Team To Projects:"
                      : "Assign Subteam To Projects:"
                  }
                  popQuestion={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Assign Team To Projects:"
                      : "Assign Subteam To Projects:"
                  }
                  optional="optional"
                  onChange={(e) => {
                    this.handelChangeSelect("researchesId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <BoxAlert text="No Members Have Been Added Yet!"></BoxAlert>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
              <MainButton
                type={MainButtonType.light}
                children={"Start Over"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
              ></MainButton>
              <MainButton
                type={MainButtonType.dark}
                children={"Create"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => {
                  this.handelCreateTeam();
                }}
                loading={this.state.loading}
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(TeamPageNew);
