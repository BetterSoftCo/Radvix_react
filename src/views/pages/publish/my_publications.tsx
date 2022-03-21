import React from "react";
import ReactPaginate from "react-paginate";
import { publishController } from "../../../controllers/publish/publish_controller";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import MyPublicationsTable from "./component/my_publications_tbl";

export class MyPublications extends React.Component {
  RoleUser = store.getState().userRole;
  controller = new publishController();
  state = {
    Publishes: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount:0,
    ResearchId:store.getState().ResearchId
  };
  getPublish(PageNumber: number, PageSize: number , ResearchId : number) {
    this.controller.getPublishes({ PageNumber: PageNumber, PageSize: PageSize , ResearchId : ResearchId}, res => {
      this.setState({
        Publishes: res.publications,
        PageCount: Math.ceil(res.count! / this.state.PageSize),
        TotalCount:res.count
      })

    }, err => console.log(err)
    )
  }
  
  handelChangePageNumber(
    e: { selected: number }
  ) {
    this.setState({
      PageNumber: e.selected
    });
    this.getPublish(e.selected + 1, this.state.PageSize, store.getState().ResearchId)
  }
  handelChangePageSize(
    e: { label: string; value: number }
  ) {
    this.setState({
      PageSize: e.value
    });
    this.getPublish(this.state.PageNumber, e.value , store.getState().ResearchId)
  }

  componentDidMount() {
    this.getPublish(this.state.PageNumber, this.state.PageSize , store.getState().ResearchId)
    store.subscribe(() => {
      this.getPublish(this.state.PageNumber, this.state.PageSize , store.getState().ResearchId)
    })
  }
  
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex flex-column flex-md-row justify-content-between align-items-baseline mb-3">
              <div className="left d-flex w-50 align-items-center">
                <h6 className="b-title d-flex align-items-center" style={{ width: "55%" }}>
                  <span
                    onClick={() => {
                      window.history.back();
                    }}
                    className="backPage"
                  ></span>{" "}
                  My Publications
                </h6>
                <InputIcon
                  chilren={
                    <img src="/images/icons/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."  TopPosition="15%"
                ></InputIcon>
              </div>
              <div className="right  d-flex justify-content-between align-items-baseline">
                <MainButton
                  children="New Publication"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="my-2 mx-2"
                ></MainButton>
                <SelectComponent
                  width="63px"
                  height="44px"
                  items={[
                    { label: '10', value: 10 },
                    { label: '15', value: 15 },
                    { label: '20', value: 20 },
                  ]}
                  TextItem="item"
                  ValueItem="id"
                  isMulti={false}
                  placeholder={this.state.PageSize.toString()}
                  onChange={(e) => {
                    this.handelChangePageSize(e)
                  }}
                ></SelectComponent>
              </div>
            </div>
            <MyPublicationsTable
              Items={this.state.Publishes}
              Heading={["Name", "Category", "Currently Working On", "Deadline"]}
            ></MyPublicationsTable>

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
                    this.handelChangePageNumber(e)
                  }}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
              <div className="d-flex justify-content-end flex-fill">
                <p className="text-right mb-0 ">Total Results: {this.state.TotalCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
