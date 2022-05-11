import React from "react";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { ButtonGroup } from "../../components/botton_group";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { BoxListScroll } from "../../components/box_list_scroll";
import { RouteComponentProps, withRouter } from "react-router";
import { MemberController } from "../../../controllers/member/member_controller";
import { LocalDataSources } from "../../../data/local_datasources";
import SimpleReactValidator from "simple-react-validator";
import { Equipment } from "../../../data/models/responses/member/get_member_by_id_res";
import { UpdateMemberReq } from "../../../data/models/requests/member/update_member_req";
type StateType = {
  userEmail: string;
  invitationNote: string;
  currentResearchId: number;
  addedTeamsId: number[];
  addedLaboratoriesId: number[];
  addedEquipmentsId: number[];
  addedResearchesId: number[];
  deletedTeamsId: number[];
  deletedLaboratoriesId: number[];
  deletedEquipmentsId: number[];
  deletedResearchesId: number[];
  role: number;
  listTeams: Array<{ label: string; value: number } | {}>;
  listEquipsAndLabs: Array<
    { label: string; value: number; isLab: boolean } | {}
  >;
  listProjects: Array<{ label: string; value: number } | {}>;
  loading: boolean;
  userRoleEnum: Array<{ label: string; value: number } | {}>;
  Teams: Equipment[];
  Equipments: Equipment[];
  Laboratoies: Equipment[];
  Researches: Equipment[];
};
interface RouteParams {
  id: string;
}
class MemberPageUseEdit extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new MemberController();
  local = new LocalDataSources();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  state: StateType = {
    userEmail: "",
    invitationNote: "",
    currentResearchId: 0,
    addedTeamsId: [],
    addedLaboratoriesId: [],
    addedEquipmentsId: [],
    addedResearchesId: [],
    deletedTeamsId: [],
    deletedLaboratoriesId: [],
    deletedEquipmentsId: [],
    deletedResearchesId: [],
    role: 0,
    listTeams: [],
    listEquipsAndLabs: [],
    listProjects: [],
    loading: false,
    userRoleEnum: [],
    Teams: [],
    Equipments: [],
    Laboratoies: [],
    Researches: [],
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
    this.controller.getMember(
      {
        userId: this.props.match.params.id,
        token: localStorage.getItem("token") ?? "",
      },
      (res) => {
        this.setState({
          userEmail: res.userEmail,
          invitationNote: res.invitationSender,
          role: res.role,
          Teams: res.teams,
          Equipments: res.equipments,
          Laboratoies: res.laboratories,
          Researches: res.researches,
        });
      },
      (err) => {}
    );
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
  handeldeletedTeams(id: number) {
    this.setState({
      deletedTeamsId: [...this.state.deletedTeamsId, id],
      Teams: this.state.Teams.filter((item) => item.id !== id),
    });
  }
  handeldeletedequipments(id: number) {
    this.setState({
      deletedEquipmentsId: [...this.state.deletedEquipmentsId, id],
      Equipments: this.state.Equipments.filter((item) => item.id !== id),
    });
  }
  handeldeletedLaboratoies(id: number) {
    this.setState({
      deletedLaboratoriesId: [...this.state.deletedLaboratoriesId, id],
      Laboratoies: this.state.Laboratoies.filter((item) => item.id !== id),
    });
  }
  handeldeletedResearches(id: number) {
    this.setState({
      deletedResearchesId: [...this.state.deletedResearchesId, id],
      Researches: this.state.Researches.filter((item) => item.id !== id),
    });
  }
  handelChangeSelectEqupiAndLab(
    e: Array<{ label: string; value: number; isLab: boolean }>
  ) {
    this.setState({
      addedEquipmentsId: e
        .filter((item) => item.isLab === false)
        .map((item) => item.value),
      addedLaboratoriesId: e
        .filter((item) => item.isLab === true)
        .map((item) => item.value),
    });
  }
  UpdateMember() {
    if (this.validator.allValid()) {
      const body: UpdateMemberReq = {
        userEmail: this.state.userEmail,
        invitationNote: this.state.invitationNote
          ? this.state.invitationNote
          : "",
        currentResearchId:
          this.state.Researches[this.state.Researches.length - 1].id,
        addedTeamsId: this.state.addedTeamsId,
        addedLaboratoriesId: this.state.addedLaboratoriesId,
        addedEquipmentsId: this.state.addedEquipmentsId,
        addedResearchesId: this.state.addedResearchesId,
        deletedTeamsId: this.state.deletedTeamsId,
        deletedLaboratoriesId: this.state.deletedLaboratoriesId,
        deletedEquipmentsId: this.state.deletedEquipmentsId,
        deletedResearchesId: this.state.deletedResearchesId,
        role: this.state.role ? this.state.role : 0,
      };
      this.setState({
        loading: true,
      });
      this.controller.updateMember(
        body,
        (res) => {
          this.setState({
            userEmail: "",
            invitationNote: "",
            currentResearchId: 0,
            addedTeamsId: [],
            addedLaboratoriesId: [],
            addedEquipmentsId: [],
            addedResearchesId: [],
            deletedTeamsId: [],
            deletedLaboratoriesId: [],
            deletedEquipmentsId: [],
            deletedResearchesId: [],
            role: 0,
            listTeams: [],
            listEquipsAndLabs: [],
            listProjects: [],
            loading: false,
            userRoleEnum: [],
            Teams: [],
            Equipments: [],
            Laboratoies: [],
            Researches: [],
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
          <h5 className="b-title d-flex align-items-center">
            <span
              onClick={() => {
                window.history.back();
              }}
              className="backPage"
            ></span>{" "}
            Edit Member Access
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
                  value={this.state.userEmail}
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Update Note:"
                  popQuestion="Update Note:"
                  optional="optional"
                  className="mt-2"
                  onChange={(e) => {
                    this.handleChange("invitationNote", e.target.value);
                  }}
                  value={this.state.invitationNote}
                ></InputComponent>
              </div>
              <div className="item">
                <ButtonGroup
                  label="Access Level:"
                  popQuestion="Access Level:"
                  name="AccessLevel"
                  items={[
                    { name: "Level 1 ", value: 1 },
                    { name: "Level 2 ", value: 2, disable: true },
                  ]}
                  TextItem="name"
                  ValueItem="value"
                  onChange={(e) => {
                    this.handleChange("accessLevel", parseInt(e.target.value));
                  }}
                  selected={this.state.role}
                ></ButtonGroup>
              </div>
              <div className="item">
                <SelectComponent
                  items={[]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Research Assistant"
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
                    this.handelChangeSelect("addedTeamsId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <div className="teams Labs">
                <div className="tags p-3">
                  {this.state.Teams.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        backgroundColor="#EBEBEB"
                        className="tag-delete"
                        children={
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="flex-fill">{item.title}</span>
                            <CircleIcon
                              type={ThemeCircleIcon.dark}
                              width="22px"
                              height="22px"
                              onClick={() => {
                                this.handeldeletedTeams(item.id);
                              }}
                            >
                              <img
                                src="/images/icons/garbage_can.svg"
                                alt="radvix"
                                width={15}
                                height={15}
                              />
                            </CircleIcon>
                          </div>
                        }
                        type={MainButtonType.light}
                        borderRadius="24px"
                        fontSize="14px"
                      ></MainButton>
                    </div>
                  ))}
                </div>
              </div>
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
              <div className="teams mb-3">
                <div className="tags p-3">
                  {this.state.Laboratoies.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        backgroundColor="#EBEBEB"
                        className="tag-delete"
                        children={
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="flex-fill">{item.title}</span>
                            <CircleIcon
                              type={ThemeCircleIcon.dark}
                              width="22px"
                              height="22px"
                              onClick={() => {
                                this.handeldeletedLaboratoies(item.id);
                              }}
                            >
                              <img
                                src="/images/icons/garbage_can.svg"
                                alt="radvix"
                                width={15}
                                height={15}
                              />
                            </CircleIcon>
                          </div>
                        }
                        type={MainButtonType.light}
                        borderRadius="24px"
                        fontSize="14px"
                      ></MainButton>
                    </div>
                  ))}
                </div>
                <BoxListScroll
                  default_photo="/Images/icons/equipment_Icon.svg"
                  items={this.state.Equipments}
                  TextItem="title"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  Deletabel
                  DeleteFunc={(p, value) => {
                    this.handeldeletedequipments(value);
                  }}
                ></BoxListScroll>
              </div>
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
                    this.handelChangeSelect("addedResearchesId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <div className="teams Labs">
                <div className="tags p-3">
                  {this.state.Researches.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        backgroundColor="#EBEBEB"
                        className="tag-delete"
                        children={
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="flex-fill">{item.title}</span>
                            <CircleIcon
                              type={ThemeCircleIcon.dark}
                              width="22px"
                              height="22px"
                              onClick={() => {
                                this.handeldeletedResearches(item.id);
                              }}
                            >
                              <img
                                src="/images/icons/garbage_can.svg"
                                alt="radvix"
                                width={15}
                                height={15}
                              />
                            </CircleIcon>
                          </div>
                        }
                        type={MainButtonType.light}
                        borderRadius="24px"
                        fontSize="14px"
                      ></MainButton>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
              <MainButton
                type={MainButtonType.light}
                children={"Cancel"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
              ></MainButton>
              <MainButton
                type={MainButtonType.dark}
                children={"Update"}
                onClick={() => {
                  this.UpdateMember();
                }}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                loading={this.state.loading}
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MemberPageUseEdit);
