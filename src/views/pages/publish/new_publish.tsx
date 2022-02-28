import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { ButtonGroup } from "../../components/botton_group";
import { BoxAlert } from "../../components/box_alert";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
 class PublishPageNew extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  date = new Date();
  handelChangeDate(params: any): void {
    console.log(params);
  }
  state = {
    files: [],
  };
  onDrop = (files: any) => {
    this.setState({ files });
    console.log(this.state);
  };
  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <h5 className="b-title d-flex">
            <span onClick={()=>{window.history.back()}} className="backPage"></span> New Publication/Presentation
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <SelectComponent
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Select A Category:"
                  placeholder="Please select one…"
                  popQuestion="Select A Category:"
                ></SelectComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Name:"
                  popQuestion="Name:"
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Planning To Submit At:"
                  popQuestion="Planning To Submit At:"
                  optional="optional"
                ></InputComponent>
              </div>
              <div className="item">
                <ButtonGroup
                  items={[
                    { name: "Low", id: 1 },
                    { name: "Medium", id: 2 },
                    { name: "High", id: 3 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  name="PublicationPriority"
                  label="Publication Priority:"
                  popQuestion="Publication Priority:"
                ></ButtonGroup>
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
                    selected={this.date}
                    onChange={this.handelChangeDate}
                  />
                  <span className="mx-2">Until</span>
                  <DatePicker
                    selected={this.date}
                    onChange={this.handelChangeDate}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <SelectComponent
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Members To Prepare With:"
                  popQuestion="Members To Prepare With:"
                  placeholder="Click to see the list…"
                ></SelectComponent>
              </div>
              <BoxAlert
                text="No Member Has Been Added Yet!
                (You will automatically be added to this discussion)"
              ></BoxAlert>
              <div className="item">
                <SelectComponent
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Who Will Upload The First Draft?"
                  placeholder="Click to see the list…"
                  popQuestion="Who Will Upload The First Draft?"
                ></SelectComponent>
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
                children={"Create"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={()=>{this.props.history.push(AppRoutes.publish_profile)}}
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PublishPageNew)