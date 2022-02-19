import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { SelectComponent } from "../../components/select_input";
import { BoxAlert } from "../../components/box_alert";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
type StateType = {
  listCategory: Array<{ label: string; value: number } | {}>;
  files: Array<File>;
  categoryId:number
};
class LaboratoryPageNew extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  date = new Date();
  handelChangeDate(params: any): void {
    console.log(params);
  }
  state: StateType = {
    files: [],
    listCategory: store.getState().settingApp.categoryType.map((item)=>{
      return {label:item.title , value:item.id}
    }),
    categoryId:0
  };
  onDrop = (files: any) => {
    this.setState({ files });
    console.log(this.state);
  };
  handelChangeSelect(
    e: { label: string; value: number }
  ) {
    this.setState({categoryId:e.value})
    
  }
  render() {
    const files = this.state.files.map((file: any) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
        <CircleIcon type={ThemeCircleIcon.dark} width="22px" height="22px">
          <img
            src="/images/icons/garbage_can.svg"
            alt="radvix"
            width={15}
            height={15}
          />
        </CircleIcon>
      </li>
    ));
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
            Create A New Laboratory
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Laboratory Name:"
                  popQuestion="Laboratory Name:"
                ></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Category:
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
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
                  <SelectComponent
                    items={this.state.listCategory}
                    TextItem="name"
                    ValueItem="id"
                    className="my-2 w-100"
                    placeholder="Click to see the list…"
                    isMulti={false}
                    onChange={(e)=>{this.handelChangeSelect(e)}}
                  ></SelectComponent>
                  <CircleIcon
                    width="36px"
                    height="36px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#9D9D9D"
                    fontSize="18px"
                    color="#ffffff"
                    className="mx-2 px-3"
                  >
                    <i className="fas fa-list"></i>
                  </CircleIcon>
                </div>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label=" Website:"
                  popQuestion=" Website:"
                  optional="optional"
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Description:"
                  popQuestion="Description:"
                  optional="optional"
                ></InputComponent>
              </div>
              <div className="item">
                <SelectComponent
                  label=" Lab Manager(s):"
                  popQuestion=" Lab Manager(s):"
                  optional="optional"
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                ></SelectComponent>
              </div>
              <BoxAlert
                text=" No Member Has Been Added Yet! (You will automatically be added
                to this research)"
              ></BoxAlert>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <span className="label d-flex align-items-center">
                  Attachments
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
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
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section className="container fileUploadBox">
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <MainButton
                          type={MainButtonType.light}
                          minHeight="30px"
                          minWidth="179px"
                          fontSize="14px"
                          borderRadius="50px"
                          backgroundColor="#fff"
                          border="1px solid #707070"
                          color="#707070"
                          className="mt-4"
                          children={
                            <div className="d-flex justify-content-between align-items-center">
                              <img
                                src="/Images/icons/cloud_computing.svg"
                                alt="sssss"
                                height="20"
                              />{" "}
                              <span className="flex-fill">
                                Browse Local Files
                              </span>
                            </div>
                          }
                        ></MainButton>
                        <p>Or drag and drop files here</p>
                      </div>
                      <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                      </aside>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label={
                    <span>
                      Address: <br /> Institution/Company
                    </span>
                  }
                  popQuestion="Address"
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label=" Address Line 1"
                  popQuestion=" Address Line 1"
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Address Line 2"
                  popQuestion="Address Line 2"
                ></InputComponent>
              </div>
              <div className="row">
                <div className="item col-md-6">
                  <InputComponent
                    type={InputType.text}
                    label="City"
                  ></InputComponent>
                </div>
                <div className="item col-md-6">
                  <InputComponent
                    type={InputType.text}
                    label="State/Province"
                  ></InputComponent>
                </div>
              </div>
              <div className="row">
                <div className="item col-md-6">
                  <InputComponent
                    type={InputType.text}
                    label=" ZIP/Postal Code"
                  ></InputComponent>
                </div>
                <div className="item col-md-6">
                  <InputComponent
                    type={InputType.text}
                    label="Phone"
                  ></InputComponent>
                </div>
              </div>
              <div className="item">
                <SelectComponent
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Country"
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
                onClick={() => {
                  this.props.history.push(AppRoutes.profile_laboratory);
                }}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LaboratoryPageNew);
