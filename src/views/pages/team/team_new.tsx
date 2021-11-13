import React from "react";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { BoxAlert } from "../../components/box_alert";
export class TeamPageNew extends React.Component {
  RoleUser = store.getState();
  date = new Date();
  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <h5 className="b-title d-flex">
            <span className="backPage"></span> Create A New Team
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Team Name:"
                  popQuestion="Research Name:"
                ></InputComponent>
              </div>

              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label=" Description:"
                  optional="optional"
                  popQuestion=" Description:"
                  className="mt-2"
                ></InputComponent>
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
                  label=" Team Manager (s):"
                  popQuestion=" Team Manager (s):"
                  optional="optional"
                ></SelectComponent>
              </div>
              <BoxAlert
                text="No Member Has Been Added Yet! 
                (You will automatically be added as a team manager)"
              ></BoxAlert>
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
                  label="Add Members To This Team:"
                  popQuestion="Add Members To This Team:"
                  optional=""
                ></SelectComponent>
              </div>
              <BoxAlert
                text="No Members Have Been Added Yet!"
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
                  placeholder="Click to see the list…"
                  label="Assign Team To Labs (Equips):"
                  popQuestion="Assign Team To Labs (Equips):"
                  optional="optional"
                ></SelectComponent>
              </div>
              <BoxAlert
                text="No Members Have Been Added Yet!"
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
                  placeholder="Click to see the list…"
                  label="Assign Team To Projects:                  "
                  popQuestion="Assign Team To Projects:"
                  optional="optional"
                ></SelectComponent>
              </div>
              <BoxAlert
                text="No Members Have Been Added Yet!"
              ></BoxAlert>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
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
                children={"Create"}
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
    );
  }
}
