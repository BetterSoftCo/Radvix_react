import React from "react";
import ReactPaginate from "react-paginate";
import { EquipmentController } from "../../../controllers/equipment/equipment_controller";
import { LocalDataSources } from "../../../data/local_datasources";
import { Equipment } from "../../../data/models/responses/equipment/get_all_equipment_res";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import EquipmentList from "./component/equipment_list";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { AccessPermition, UserRoles } from "../../../core/utils";
type StateType = {
  Equipments: Equipment[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
  TotalCount: number;
  Search:string
};
class EquipPage extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new EquipmentController();
  local = new LocalDataSources();
  state: StateType = {
    Equipments: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount: 0,
    Search: ""
  };
  componentDidMount() {
    this.GetEquipments(this.state.PageNumber, this.state.PageSize);
  }
  GetEquipments(PageNumber: number, PageSize: number ,) {
    this.controller.getAllEquipments(
      {
        PageNumber: PageNumber,
        PageSize: PageSize,
        SearchParameter:this.state.Search
      },
      (res) => {
        this.setState({
          Equipments: res.equipments,
          PageCount: Math.ceil(res.count! / this.state.PageSize),
          TotalCount: res.count,
        });
      },
      (err) => console.log(err)
    );
  }
  handelChangePageNumber(e: { selected: number }) {
    this.setState({
      PageNumber: e.selected,
    });
    this.GetEquipments(e.selected + 1, this.state.PageSize);
  }
  handelChangePageSize(e: { label: string; value: number }) {
    this.setState({
      PageSize: e.value,
    });
    this.GetEquipments(this.state.PageNumber, e.value);
  }
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6
                  className="b-title d-flex align-items-center"
                  style={{ width: "55%" }}
                >
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
                  onChange={(e) => {
                    this.setState({
                      Search: e.target.value,
                    });
                    this.GetEquipments(this.state.PageNumber, this.state.PageSize)
                  }}
                ></InputIcon>
              </div>
              <div className="right  d-flex justify-content-between align-items-baseline">
                {AccessPermition(this.RoleUser, [
                  UserRoles.Admin,
                  UserRoles.L1Client,
                  UserRoles.L1User,
                  UserRoles.L2User,
                ]) ? (
                  <MainButton
                    children="New Equip"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="11px"
                    className="my-2 mx-2"
                    minWidth="100px"
                    onClick={() => {
                      this.props.history.push(AppRoutes.equip_new);
                    }}
                  ></MainButton>
                ) : null}

                <MainButton
                  children="Laboratories"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="11px"
                  className="my-2 mx-2"
                  minWidth="100px"
                  onClick={() => {
                    this.props.history.push(AppRoutes.laboratory);
                  }}
                ></MainButton>
                <SelectComponent
                  width="90px"
                  height="44px"
                  items={[
                    { label: "10", value: 10 },
                    { label: "15", value: 15 },
                    { label: "20", value: 20 },
                  ]}
                  TextItem="item"
                  ValueItem="id"
                  isMulti={false}
                  placeholder={this.state.PageSize.toString()}
                  onChange={(e) => {
                    this.handelChangePageSize(e);
                  }}
                ></SelectComponent>
              </div>
            </div>
            <EquipmentList
              Items={this.state.Equipments}
              Heading={[{ name: 'Equipment Name', center: false }, { name: 'Laboratory', center: true }, { name: 'Users', center: true }, { name: 'Status', center: true }]}
              role={this.RoleUser}
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
                  pageCount={this.state.PageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={(e) => {
                    this.handelChangePageNumber(e);
                  }}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
              <div className="d-flex justify-content-end flex-fill">
                <p className="text-right mb-0 ">
                  Total Results: {this.state.TotalCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(EquipPage);
