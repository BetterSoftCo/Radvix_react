import React from "react";
// import { upload } from "../../../core/constants";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
export class TeamPage extends React.Component {
  RoleUser = store.getState();

  render() {
    return (
      <div className="container-fluid team">
        <div className="row"></div>
        <div className="col-12">
            <div className="TableBox">
              <div className="TopTableBox w-100 d-flex justify-content-between align-items-center mb-3">
                <div className="left d-flex w-50 align-items-center">
                  {/* <img src={upload} alt=""/> */}
                </div>
                <div className="right w-50 d-flex justify-content-end">
                  
                </div>
              </div>                    
           
            </div>
          </div>
      </div>
    );
  }
}
