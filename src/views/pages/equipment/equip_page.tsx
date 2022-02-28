import React from "react";
import ReactPaginate from "react-paginate";
import { EquipmentController } from "../../../controllers/equipment/equipment_controller";
import { LocalDataSources } from "../../../data/local_datasources";
import { GetAllEquipmentResult } from "../../../data/models/responses/equipment/get_all_equipment_res";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import { EquipmentList } from "./component/equipment_list";
type StateType = {
  Equipments: GetAllEquipmentResult[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
};
export class EquipPage extends React.Component {
  RoleUser = store.getState().userRole;
  controller = new EquipmentController();
  local = new LocalDataSources();
  state: StateType = {
    Equipments: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
  };
  componentDidMount() {
    this.GetEquipments(this.state.PageNumber, this.state.PageSize);
  }
  GetEquipments(PageNumber: number, PageSize: number) {
    this.controller.getAllEquipments(
      { userId: this.local.getUserId() },
      (res) => {
        this.setState({
          Equipments: res,
        });
      },
      (err) => console.log(err)
    );
  }
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6 className="b-title d-flex" style={{ width: "45%" }}>
                  <span
                    onClick={() => {
                      window.history.back();
                    }}
                    className="backPage"
                  ></span>{" "}
                  Equipment List
                </h6>
                <InputIcon
                  chilren={
                    <img src="/images/icons/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."
                  TopPosition="15%"
                ></InputIcon>
              </div>
              <div className="right  d-flex justify-content-between">
                <MainButton
                  children="New Equip"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="my-2 mx-2"
                ></MainButton>
                <MainButton
                  children="Laboratories"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="my-2 mx-2"
                ></MainButton>
                <SelectComponent
                  width="63px"
                  height="44px"
                  items={[
                    { item: 1, id: 1 },
                    { item: 2, id: 2 },
                    { item: 3, id: 3 },
                  ]}
                  TextItem="item"
                  ValueItem="id"
                ></SelectComponent>
              </div>
            </div>
            <EquipmentList
              Items={this.state.Equipments}
              Heading={["Equipment Name", "Laboratory", "Users", "Status"]}
            ></EquipmentList>

            <div className="d-flex justify-content-between align-items-baseline">
              <div className="d-flex justify-content-end flex-fill">
                <ReactPaginate
                  previousLabel={
                    <CircleIcon
                      width="24px"
                      backgroundColor="#ADADAD"
                      height="24px"
                      type={ThemeCircleIcon.dark}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </CircleIcon>
                  }
                  nextLabel={
                    <CircleIcon
                      width="24px"
                      backgroundColor="#ADADAD"
                      height="24px"
                      type={ThemeCircleIcon.dark}
                    >
                      <i className="fas fa-angle-right"></i>
                    </CircleIcon>
                  }
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={20}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={() => {
                    console.log("changepage");
                  }}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
              <div className="d-flex justify-content-end flex-fill">
                <p className="text-right mb-0 ">Total Results: 45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
