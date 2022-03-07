import React from "react";
import ReactPaginate from "react-paginate";
import { RouteComponentProps, withRouter } from "react-router";
import { DataController } from "../../../controllers/data/data_controller";
import { AppRoutes } from "../../../core/constants";
import { DataList } from "../../../data/models/responses/data/get_all_data_res";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import DataCollectionTable from "./component/data_collection_table";
type StateType = {
  Datas: DataList[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
  TotalCount: number;
};
class DataCollection extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new DataController();
  state: StateType = {
    Datas: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount: 0,
  };
  componentDidMount() {
    this.GetDatas(this.state.PageNumber, this.state.PageSize);
    store.subscribe(() => {
      this.GetDatas(this.state.PageNumber, this.state.PageSize);
    });
  }
  GetDatas(PageNumber: number, PageSize: number) {
    this.controller.getAllData(
      { PageNumber, PageSize },
      (res) => {
        this.setState({
          Datas: res.dataLists,
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
    this.GetDatas(e.selected + 1, this.state.PageSize);
  }
  handelChangePageSize(e: { label: string; value: number }) {
    this.setState({
      PageSize: e.value,
    });
    this.GetDatas(this.state.PageNumber, e.value);
  }
  render() {
    return (
      <div className="container-fluid research task">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6 style={{ width: "35%" }}>Data Collection</h6>
                <InputIcon
                  chilren={
                    <img src='/images/icons/search_box_icon.svg' alt="" />
                  }
                  width="100%"
                  placeholder="Search..." TopPosition="15%"
                ></InputIcon>
              </div>
              <div className="right w-50 d-flex justify-content-end align-items-center">
                <MainButton
                  children="New Data"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="16px"
                  onClick={() => { this.props.history.push(AppRoutes.data_new) }}
                ></MainButton>
                <MainButton
                  children="My Data"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="16px"
                  onClick={() => { this.props.history.push(AppRoutes.data_mydata) }}
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
            <DataCollectionTable role={this.RoleUser} Datas={this.state.Datas}></DataCollectionTable>

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
                <p className="text-right mb-0 " >Total Results: {this.state.TotalCount}</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(DataCollection)