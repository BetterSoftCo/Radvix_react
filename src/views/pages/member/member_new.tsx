import React from "react";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { BoxAlert } from "../../components/box_alert";
import { ButtonGroup } from "../../components/botton_group";
export class MemberPageNew extends React.Component {
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
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <h5 className="b-title d-flex">
            <span onClick={()=>{window.history.back()}} className="backPage"></span> Invite A New Member
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="User Email:"
                  popQuestion="User Email:"
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Invitation Note:"
                  popQuestion="Invitation Note:"
                  optional="optional"
                  className="mt-2"
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
                ></ButtonGroup>
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
                  placeholder="Click to see the list…"
                ></SelectComponent>
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
                  placeholder="Click to see the list…"
                  label="Add Member To Teams"
                  popQuestion="Add Member To Teams"
                ></SelectComponent>
              </div>
              <BoxAlert text=" No Team Has Been Added Yet!"></BoxAlert>
              <div className="item">
                <SelectComponent
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Assign Member To Labs (Equips)"
                  popQuestion="Assign Member To Labs (Equips)"
                  optional="optional"
                ></SelectComponent>
              </div>
              <BoxAlert text="No Laboratory Has Been Added Yet!"></BoxAlert>
              <div className="item">
                <SelectComponent
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Assign Member To Projects"
                  popQuestion="Assign Member To Projects"
                  optional="optional"
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
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
