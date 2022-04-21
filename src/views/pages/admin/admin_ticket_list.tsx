import React from "react";
import ReactPaginate from "react-paginate";
import { DiscusstionController } from "../../../controllers/discussion/discusstion_controller";
import { Discussion } from "../../../data/models/responses/discussion/get_all_discusstion_res";
import { store } from "../../../data/store";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import { TicketsTbl } from "./component/tickets_tbl";
type StateType = {
  Discusstion: Discussion[];
  PageNumber: number;
  PageSize: number;
  PageCount: number;
  TotalCount: number;
};
export class AdminTickets extends React.Component {
  controller = new DiscusstionController();
  state: StateType = {
    Discusstion: [],
    PageNumber: 1,
    PageSize: 10,
    PageCount: 0,
    TotalCount: 0,
  };
  componentDidMount() {
    this.GetDiscusstion(this.state.PageNumber, this.state.PageSize);
  }
  GetDiscusstion(PageNumber: number, PageSize: number) {
    this.controller.getAllDiscusstion(
      { PageNumber: PageNumber, PageSize: PageSize, ticket: true },
      (res) => {
        this.setState({
          Discusstion: res.discussions,
          PageCount: Math.ceil(res.count! / this.state.PageSize),
          TotalCount: res.count,
        });
      },
      (err) => {}
    );
  }
  handelChangePageNumber(e: { selected: number }) {
    this.setState({
      PageNumber: e.selected,
    });
    this.GetDiscusstion(e.selected + 1, this.state.PageSize);
  }
  handelChangePageSize(e: { label: string; value: number }) {
    this.setState({
      PageSize: e.value,
    });
    this.GetDiscusstion(this.state.PageNumber, e.value);
  }
  render() {
    return (
      <div className="container-fluid research">
        <div className="row"></div>
        <div className="col-12">
          <div className="TableBox">
            <div className="TopTableBox d-flex justify-content-between align-items-center mb-3">
              <div className="left d-flex w-50 align-items-baseline">
                <h6 style={{ width: "35%" }}>Tickets</h6>
                <InputIcon
                  chilren={
                    <img src="/images/icons/search_box_icon.svg" alt="" />
                  }
                  width="100%"
                  placeholder="Search..."  TopPosition="15%"
                ></InputIcon>
              </div>
              <div className="right w-50 d-flex justify-content-end align-items-center">
                <MainButton
                  children="Broadcast "
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="mx-4"
                  minWidth="150px"
                  minHeight="24px"
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
            <TicketsTbl
              Items={this.state.Discusstion}
              Heading={[{name:'Subject',center:false},{name:'Ticket',center:true},{name:'Created By',center:true},{name:'Date Created',center:true},{name:'Update',center:true},{name:'Status',center:true}]}
              
            ></TicketsTbl>

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
                  onPageChange={()=>{console.log('changepage')}}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
                  </div>
                  <div className="d-flex justify-content-end flex-fill">
                  <p className="text-right mb-0 " >Total Results: 45</p>
                  </div>
                 
                
              </div>
          </div>
        </div>
      </div>
    );
  }
}
