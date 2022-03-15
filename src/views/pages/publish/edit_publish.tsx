import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { BoxAlert } from "../../components/box_alert";
import { RouteComponentProps, withRouter } from "react-router";
import SimpleReactValidator from "simple-react-validator";
import { publishController } from "../../../controllers/publish/publish_controller";
import { AppRoutes } from "../../../core/constants";
import { EditPublishReq } from "../../../data/models/requests/publish/update_publish_req";
interface RouteParams {
  id: string;
}
class PublishPageEdit extends React.Component<RouteComponentProps<RouteParams>> {
  RoleUser = store.getState().userRole;
  controller = new publishController();
  date = new Date();
  handelChangeDate(target: string, params: any): void {
    this.setState({
      [target]: params,
    });
  }
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  state = {
    id: 0,
    name: '',
    categoryId: 0,
    startDate: new Date(),
    endDate: new Date(),
    users: [],
    draftUploader: '',
    loading: false,
    listMembers: [],
    categories: [],
  };
  
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelChangeSelectMultiple(e: Array<{ label: string; value: number }>, target: string) {
    const user_Id = e.map((item) => item.value);
    const drafList = e.map((item) => item);
    this.setState({
      [target]: user_Id,
      drafList: drafList,
    })
  }

  handelChangeSelect(
    target: string,
    e: { label: string; value: number }
  ) {
    this.setState({ [target]: e.value });
  }
  componentDidMount() {
    this.controller.getPublishById(
      { publicationId: parseInt(this.props.match.params.id) },
      (res) => {
        this.setState({
          name: res.name,
          // categoryId: res.categoryId,
          startDate: new Date(),
          endDate: new Date(),
          users: res.users,
          // draftUploader: res.draftUploader,
          // listMembers: res.listMembers,
          // categories: res.categories,
          // drafList: res.drafList,

        });
      }
    );
    this.controller.SearchPublish(res => {
      this.setState({
        listMembers: res.users?.map(item => {
          return { label: item.firstName, value: item.id }
        }),
        categories: res.categories?.map(item => {
          return { label: item.title, value: item.id }
        }),
      })
    }, err => { })
  }
  UpdatePublish() {
    if (this.validator.allValid()) {
      const body: EditPublishReq = {
        id: parseInt(this.props.match.params.id),
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        name: this.state.name,
        categoryId: this.state.categoryId,
        addedUsers:this.state.users
      };
      this.setState({
        loading: true,
      });
      this.controller.updatePublish(
        body,
        (res) => {
          this.setState({
            loading: false,
          });
          this.props.history.push(
            AppRoutes.publish
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
            <span onClick={() => { window.history.back() }} className="backPage"></span> Edit Publication/Presentation
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <SelectComponent
                  items={this.state.categories}
                  TextItem="title"
                  ValueItem="id"
                  className="my-2"
                  label="Select A Category:"
                  placeholder="Please select one…"
                  popQuestion="Select A Category:"
                  isMulti={false}
                  onChange={(e) => {
                    this.handelChangeSelect("categoryId", e);
                  }}
                ></SelectComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Name:"
                  popQuestion="Name:"
                  onChange={(e) => {
                    this.handleChange("name", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Name",
                    this.state.name,
                    "required"
                  )}
                  value={this.state.name}
                ></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Scheduled Timeline:{" "}
                  <CircleIcon
                    width="20px"
                    height="20px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="transparent"
                    border="1px solid #D5D5D5"
                    fontSize="10px"
                    color="#D5D5D5"
                  >
                    <i className="fas fa-question"></i>
                  </CircleIcon>
                </span>
                <div className="d-flex justify-content-between align-items-center">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={(e) => {
                      this.handelChangeDate("startDate", e);
                    }}
                  />
                  <span className="mx-2">Until</span>
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={(e) => {
                      this.handelChangeDate("endDate", e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <SelectComponent
                  items={this.state.listMembers}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Members To Prepare With:"
                  popQuestion="Members To Prepare With:"
                  placeholder="Click to see the list…"
                  optional="optional"
                  onChange={(e) => {
                    this.handelChangeSelectMultiple(e, "users");
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <BoxAlert
                text="No Member Has Been Added Yet!
                (You will automatically be added to this discussion)"
              ></BoxAlert>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
              
              <MainButton
                type={MainButtonType.dark}
                children={"Edit"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => {
                  this.UpdatePublish()
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
export default withRouter(PublishPageEdit)