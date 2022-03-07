import React from "react";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { BoxAlert } from "../../components/box_alert";
import { ButtonGroup } from "../../components/botton_group";
import SimpleReactValidator from "simple-react-validator";
import { MemberController } from "../../../controllers/member/member_controller";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { LocalDataSources } from "../../../data/local_datasources";
type StateType = {
  userEmail: string;
  invitationNote: string;
  accessLevel: number;
  currentResearchId: number;
  teamsId: number[];
  subTeamsId: number[];
  laboratoriesId: number[];
  equipmentsId: number[];
  researchesId: number[];
  role: number;
  listTeams: Array<{ label: string; value: number } | {}>;
  listEquipsAndLabs: Array<
    { label: string; value: number; isLab: boolean } | {}
  >;
  listProjects: Array<{ label: string; value: number } | {}>;
  loading: boolean;
  userRoleEnum: Array<{ label: string; value: number } | {}>;
};
class MemberPageNew extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  controller = new MemberController();
  local = new LocalDataSources();
  state: StateType = {
    accessLevel: 1,
    currentResearchId: 0,
    equipmentsId: [],
    invitationNote: "",
    laboratoriesId: [],
    listEquipsAndLabs: [],
    listProjects: [],
    listTeams: [],
    researchesId: [],
    role: 0,
    subTeamsId: [],
    teamsId: [],
    userEmail: "",
    loading: false,
    userRoleEnum: [],
  };
  componentDidMount() {
    this.controller.SearchMember(
      (res) => {
        const EqupisList = res.equipments.map((item) => {
          return { label: item.title, value: item.id, isLab: false };
        });
        const LabsList = res.laboratories.map((item) => {
          return { label: item.title, value: item.id, isLab: true };
        });
        this.setState({
          listTeams: res.teams.map((item) => {
            return { label: item.title, value: item.id };
          }),
          listEquipsAndLabs: [...EqupisList, ...LabsList],
          listProjects: res.researches.map((item) => {
            return { label: item.title, value: item.id };
          }),
        });
      },
      (err) => {}
    );
    this.setState({
      userRoleEnum: this.local.getSetting().userRoleEnum.map((item) => {
        return { label: item.title, value: item.id };
      }),
    });
    
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
  handelChangeSelectSingle(
    target: string,
    e: { label: string; value: number }
  ) {
    this.setState({ [target]: e.value });
  }
  handelChangeSelectEqupiAndLab(
    e: Array<{ label: string; value: number; isLab: boolean }>
  ) {
    this.setState({
      equipmentsId: e
        .filter((item) => item.isLab === false)
        .map((item) => item.value),
      laboratoriesId: e
        .filter((item) => item.isLab === true)
        .map((item) => item.value),
    });
  }
  handelCreateMember() {
    if (this.validator.allValid()) {
      const body = {
        accessLevel: this.state.accessLevel,
        currentResearchId:
          this.state.researchesId[this.state.researchesId.length - 1],
        equipmentsId: this.state.equipmentsId,
        invitationNote: this.state.invitationNote,
        laboratoriesId: this.state.laboratoriesId,
        researchesId: this.state.researchesId,
        subTeamsId: this.state.subTeamsId,
        teamsId: this.state.teamsId,
        userEmail: this.state.userEmail,
        role: this.state.role,
      };
      this.setState({
        loading: true,
      });
      this.controller.createMember(
        body,
        (res) => {
          this.setState({
            accessLevel: 1,
            currentResearchId: 0,
            equipmentsId: [],
            invitationNote: "",
            laboratoriesId: [],
            listEquipsAndLabs: [],
            listProjects: [],
            listTeams: [],
            researchesId: [],
            role: 0,
            subTeamsId: [],
            teamsId: [],
            userEmail: "",
            loading: false,
          });
          this.props.history.push(
            `${AppRoutes.member_profile.replace(":id", "1")}`
          );
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
            Invite A New Member
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="User Email:"
                  popQuestion="User Email:"
                  onChange={(e) => {
                    this.handleChange("userEmail", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "User Email",
                    this.state.userEmail,
                    "required|email"
                  )}
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Invitation Note:"
                  popQuestion="Invitation Note:"
                  optional="optional"
                  className="mt-2"
                  onChange={(e) => {
                    this.handleChange("invitationNote", e.target.value);
                  }}
                ></InputComponent>
              </div>
              <div className="item">
                <ButtonGroup
                  label="Access Level:"
                  popQuestion="Access Level:"
                  name="AccessLevel"
                  items={[
                    { name: "Level 1 ", value: 1 },
                    { name: "Level 2 ", value: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="value"
                  selected={this.state.accessLevel}
                  onChange={(e) => {
                    this.handleChange("accessLevel", parseInt(e.target.value));
                  }}
                ></ButtonGroup>
              </div>
              <div className="item">
                <SelectComponent
                  items={this.state.userRoleEnum}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  onChange={(e) => {
                    this.handelChangeSelectSingle("role", e);
                  }}
                ></SelectComponent>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <SelectComponent
                  items={this.state.listTeams}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Add Member To Teams"
                  popQuestion="Add Member To Teams"
                  onChange={(e) => {
                    this.handelChangeSelect("teamsId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <BoxAlert text=" No Team Has Been Added Yet!"></BoxAlert>
              <div className="item">
                <SelectComponent
                  items={this.state.listEquipsAndLabs}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Assign Member To Labs (Equips)"
                  popQuestion="Assign Member To Labs (Equips)"
                  optional="optional"
                  onChange={(e) => {
                    this.handelChangeSelectEqupiAndLab(e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <BoxAlert text="No Laboratory Has Been Added Yet!"></BoxAlert>
              <div className="item">
                <SelectComponent
                  items={this.state.listProjects}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Assign Member To Projects"
                  popQuestion="Assign Member To Projects"
                  optional="optional"
                  onChange={(e) => {
                    this.handelChangeSelect("researchesId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <BoxAlert text="No Project Has Been Assigned Yet!"></BoxAlert>
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
                children={"Send Invitation"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => {
                  this.handelCreateMember();
                }}
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MemberPageNew);
