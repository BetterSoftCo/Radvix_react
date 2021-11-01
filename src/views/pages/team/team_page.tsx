import React from "react";
import { store } from "../../../data/Store";
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
                <InputComponent
                    type={InputType.text}
                    width="90%"
                    height="44px"
                    items={[
                      { item: 1, id: 1 },
                      { item: 2, id: 2 },
                      { item: 3, id: 3 },
                    ]}
                    TextItem="item"
                    ValueItem="id"
                  />
                  <InputComponent
                    type={InputType.select}
                    width="90%"
                    height="44px"
                    items={[
                      { item: 1, id: 1 },
                      { item: 2, id: 2 },
                      { item: 3, id: 3 },
                    ]}
                    TextItem="item"
                    ValueItem="id"
                  />
                  <InputComponent
                    type={InputType.text}
                    width="90%"
                    height="44px"
                    items={[
                      { item: 1, id: 1 },
                      { item: 2, id: 2 },
                      { item: 3, id: 3 },
                    ]}
                    TextItem="item"
                    ValueItem="id"
                  />
                </div>
                <div className="right w-50 d-flex justify-content-end">
                  <InputComponent
                    type={InputType.text}
                    width="90%"
                    height="44px"
                    items={[
                      { item: 1, id: 1 },
                      { item: 2, id: 2 },
                      { item: 3, id: 3 },
                    ]}
                    TextItem="item"
                    ValueItem="id"
                  ></InputComponent>
                </div>
              </div>                    
           
            </div>
          </div>
      </div>
    );
  }
}
