import React from "react";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { BoxListScroll } from "../../components/box_list_scroll";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
import { TeamController } from "../../../controllers/team/team_controller";
import { LocalDataSources } from "../../../data/local_datasources";
import {
  AppTask,
  Manager,
} from "../../../data/models/responses/team/get_by_id_res";
import { User } from "../../../data/models/responses/team/team_search_res";
import { UpdateTeamReq } from "../../../data/models/requests/team/update_team_req";
type StateType = {
  id: number;
  title: string;
  description: string;
  addedManagersId: string[];
  addedUsersId: string[];
  addedLaboratoriesId: number[];
  addedEquipmentsId: number[];
  addedResearchesId: number[];
  deletedManagersId: string[];
  deletedUsersId: string[];
  deletedLaboratoriesId: number[];
  deletedEquipmentsId: number[];
  deletedResearchesId: number[];
  listManagers: Array<{ label: string; value: string } | {}>;
  listUsers: Array<{ label: string; value: string } | {}>;
  listLaboratories: Array<{ label: string; value: number } | {}>;
  listResearch: Array<{ label: string; value: number } | {}>;
  loading: boolean;
  Managers: Manager[];
  User: User[];
  laboratories: AppTask[];
  equipments: AppTask[];
  researches: AppTask[];
};
interface RouteParams {
  id: string;
}
class TeamPageEdit extends React.Component<RouteComponentProps<RouteParams>> {
  RoleUser = store.getState().userRole;
  date = new Date();
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  controller = new TeamController();
  local: LocalDataSources = new LocalDataSources();
  state: StateType = {
    addedEquipmentsId: [],
    addedLaboratoriesId: [],
    addedManagersId: [],
    addedResearchesId: [],
    addedUsersId: [],
    deletedEquipmentsId: [],
    deletedLaboratoriesId: [],
    deletedManagersId: [],
    id: 0,
    title: "",
    description: "",
    deletedUsersId: [],
    deletedResearchesId: [],
    listManagers: [],
    listUsers: [],
    listLaboratories: [],
    listResearch: [],
    loading: false,
    Managers: [],
    User: [],
    laboratories: [],
    equipments: [],
    researches: [],
  };
  componentDidMount() {
    this.controller.TeamSearch((res) => {
      this.setState({
        listLaboratories: res.laboratories.map((item) => {
          return { label: item.title, value: item.id };
        }),
        listManagers: res.managers.map((item) => {
          return {
            label: item.firstName + " " + item.lastName,
            value: item.userId,
          };
        }),
        listResearch: res.researches.map((item) => {
          return { label: item.title, value: item.id };
        }),
        listUsers: res.users.map((item) => {
          return {
            label: item.firstName + " " + item.lastName,
            value: item.id,
          };
        }),
      });
    });
    this.controller.getByIdTeam(
      {
        teamId: parseInt(this.props.match.params.id),
      },
      (res) => {
        this.setState({
          title: res.title,
          description: res.description,
          Managers: res.managers,
          User: res.users,
          laboratories: res.laboratories,
          equipments: res.equipments,
          researches: res.researches,
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
  handeldeletedManagers(id: string) {
    this.setState({
      deletedManagersId: [...this.state.deletedManagersId, id],
      Managers: this.state.Managers.filter((item) => item.userId !== id),
    });
  }
  handeldeletedUser(id: string) {
    this.setState({
      deletedUsersId: [...this.state.deletedUsersId, id],
      User: this.state.User.filter((item) => item.id !== id),
    });
  }
  handeldeletedlaboratories(id: number) {
    this.setState({
      deletedLaboratoriesId: [...this.state.deletedLaboratoriesId, id],
      laboratories: this.state.laboratories.filter((item) => item.id !== id),
    });
  }
  handeldeletedequipments(id: number) {
    this.setState({
      deletedEquipmentsId: [...this.state.deletedEquipmentsId, id],
      equipments: this.state.equipments.filter((item) => item.id !== id),
    });
  }
  handeldeletedresearches(id: number) {
    this.setState({
      deletedResearchesId: [...this.state.deletedResearchesId, id],
      researches: this.state.researches.filter((item) => item.id !== id),
    });
  }
  UpdateTeam() {
    if (this.validator.allValid()) {
      const body: UpdateTeamReq = {
        id: parseInt(this.props.match.params.id),
        title: this.state.title,
        description: this.state.description,
        addedManagersId: this.state.addedManagersId,
        addedUsersId: this.state.addedUsersId,
        addedLaboratoriesId: this.state.addedLaboratoriesId,
        addedEquipmentsId: this.state.addedEquipmentsId,
        addedResearchesId: this.state.addedResearchesId,
        deletedManagersId: this.state.deletedManagersId,
        deletedUsersId: this.state.deletedUsersId,
        deletedLaboratoriesId: this.state.deletedLaboratoriesId,
        deletedEquipmentsId: this.state.deletedEquipmentsId,
        deletedResearchesId: this.state.deletedResearchesId,
      };
      this.setState({
        loading: true,
      });
      this.controller.updateTeam(
        body,
        (res) => {
          this.setState({
            loading: false,
          });
          this.props.history.push(
            `${AppRoutes.team_profile.replace(":id", res.id?.toString() ?? "")}`
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
            Edit Team
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Team Name:"
                  popQuestion="Team Name:"
                  onChange={(e) => {
                    this.handleChange("title", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Team Name",
                    this.state.title,
                    "required"
                  )}
                  value={this.state.title}
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
                  value={this.state.description}
                ></InputComponent>
              </div>
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
                    this.handelChangeSelect("addedManagersId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <div className="teams Labs mb-3">
                <BoxListScroll
                  className="mt-3 pointer"
                  items={this.state.Managers}
                  TextItem="firstName"
                  ValueItem="userId"
                  ImageItem="image"
                  Deletabel
                  DeleteFunc={(e, value) => {
                    this.handeldeletedManagers(value);
                  }}
                ></BoxListScroll>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <SelectComponent
                  items={this.state.listUsers}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Add Members To This Team:"
                  popQuestion="Add Members To This Team:"
                  optional=""
                  onChange={(e) => {
                    this.handelChangeSelect("addedUsersId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <div className="teams Labs mb-3">
                <BoxListScroll
                  className="mt-3 pointer"
                  items={this.state.User}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
                  Deletabel
                  DeleteFunc={(e, val) => {
                    this.handeldeletedUser(val);
                  }}
                ></BoxListScroll>
              </div>
              <div className="item">
                <SelectComponent
                  items={this.state.listLaboratories}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Assign Team To Labs (Equips):"
                  popQuestion="Assign Team To Labs (Equips):"
                  optional="optional"
                  onChange={(e) => {
                    this.handelChangeSelect("addedLaboratoriesId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <div className="teams Labs mb-3">
                <div className="tags p-3">
                  {this.state.laboratories.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        backgroundColor="#EBEBEB"
                        className="tag-delete"
                        children={
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="flex-fill mx-2">{item.title}</span>
                            <CircleIcon
                              type={ThemeCircleIcon.dark}
                              width="22px"
                              height="22px"
                              onClick={() => {
                                this.handeldeletedlaboratories(item.id);
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
                  className="mt-3 pointer"
                  items={this.state.equipments}
                  TextItem="title"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  Deletabel
                  DeleteFunc={(e, val) => {
                    this.handeldeletedequipments(val);
                  }}
                ></BoxListScroll>
              </div>
              <div className="item">
                <SelectComponent
                  items={this.state.listResearch}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Assign Team To Projects:                  "
                  popQuestion="Assign Team To Projects:"
                  optional="optional"
                  onChange={(e) => {
                    this.handelChangeSelect("addedResearchesId", e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <div className="teams Labs mb-3">
                <div className="tags p-3">
                  {this.state.researches.map((item) => (
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
                                this.handeldeletedresearches(item.id);
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
                children={"Start Over"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
              ></MainButton>
              <MainButton
                type={MainButtonType.dark}
                children={"save"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => {
                  this.UpdateTeam();
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
export default withRouter(TeamPageEdit);
