import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { ButtonGroup } from "../../components/botton_group";
export class AdminBroadcast extends React.Component {
  RoleUser = store.getState();
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
    const files = this.state.files.map((file: any) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <h5 className="b-title d-flex">
            <span className="backPage"></span> New Broadcast 
          </h5>
          <div className="form row">
            <div className="col-md-4 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Subject:"
                ></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Attachment:
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
                </span>
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section className="container fileUploadBox">
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                      <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                      </aside>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className="item d-flex justify-content-between align-items-center">
                <InputComponent
                  type={InputType.text}
                  placeholder="https://"
                ></InputComponent>
                <CircleIcon
                  width="36px"
                  height="36px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="#9D9D9D"
                  fontSize="18px"
                  color="#ffffff"
                  className="mx-2"
                >
                  <i className="fas fa-plus"></i>
                </CircleIcon>
              </div>
            </div>
            <div className="col-md-8 right">
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Message:"
                  className="mt-2"
                ></InputComponent>
              </div>
              <div className="item my-4">
                <ButtonGroup
                  name="SendTo"
                  label="Send To:"
                  items={[
                    { name: "All Members ", value: 1 },
                    { name: "Client Users", value: 2 },
                    { name: "L1 Users", value: 3 },
                    { name: "L2 Users", value: 4 },
                    { name: "L3 Users", value: 5 },
                    { name: "Custom ", value: 6 },
                  ]}
                  TextItem="name"
                  ValueItem="value"
                ></ButtonGroup>
              </div>
              <div className="item">
                <div className="d-flex justify-content-center align-items-center my-4">
                  <MainButton
                    type={MainButtonType.light}
                    children={"Start Over"}
                    borderRadius="50px"
                    fontSize="20px"
                    className="mx-2"
                    minHeight="47px"
                    minWidth="110px"
                  ></MainButton>
                  <MainButton
                    type={MainButtonType.dark}
                    children={"Start"}
                    borderRadius="50px"
                    fontSize="20px"
                    className="mx-2"
                    minHeight="47px"
                    minWidth="110px"
                  ></MainButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}