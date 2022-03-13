import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RouteComponentProps, withRouter } from "react-router";
import {
  ScheduleComponent,
  Inject,
  ViewsDirective,
  ViewDirective,
  TimelineMonth,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { Internationalization } from "@syncfusion/ej2-base";
import { ResearchController } from "../../../controllers/research/research_controller";
import { store } from "../../../data/store";
import { User } from "../../../data/models/responses/research/timeline_res";
import { MainButton, MainButtonType } from "../../components/button";
class TimeLine extends React.Component<RouteComponentProps> {
  controller = new ResearchController();
  componentDidMount() {
    this.getTimeline();
    store.subscribe(() => {
      this.getTimeline();
    });
  }
  getTimeline() {
    this.controller.getTimeline(
      {
        id: store.getState().ResearchId,
      },
      (res) => {
        this.setState({
          data: res.map((item) => {
            return {
              Id: 1,
              Subject: item.title,
              StartTime: new Date(item.startDate),
              EndTime: new Date(item.endDate),
              users: [
                "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
                "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
                "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
              ],
              status: item.status,
            };
          }),
        });
      },
      (err) => {}
    );
  }
  state = {
    data: [],
  };
  private instance: Internationalization = new Internationalization();

  private getTimeString(value: Date) {
    return this.instance.formatDate(value, { skeleton: "hm" });
  }
  private eventTemplate(props: {
    SecondaryColor: any;
    PrimaryColor: any;
    Subject:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    StartTime: Date;
    EndTime: Date;
    ImageName: string | undefined;
    users: string[];
    status: number;
    Description:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }): JSX.Element {
    return (
      <div
        className="template-wrap"
        style={{ background: props.SecondaryColor }}
      >
        <div className="subject" style={{ background: "#2C2C2C" }}>
          {props.Subject}{" "}
          <MainButton
            children={props.status.isStatus()}
            type={MainButtonType.dark}
            borderRadius="24px"
            fontSize="10px"
            backgroundColor="#8EE1FF"
            className="mx-1"
            color="#707070"
          ></MainButton>
          {props.users.map((item) => (
            <img
              src={item}
              alt=""
              width={15}
              height={15}
              className="rounded-circle"
              style={{ marginRight: "1.5px" }}
            />
          ))}
          {`+3 more`}
        </div>
        <div className="time" style={{ background: "#2C2C2C" }}>
          Time: {this.getTimeString(props.StartTime)} -{" "}
          {this.getTimeString(props.EndTime)}
        </div>

        <div className="event-description">{props.Description}</div>
        <div className="footer" style={{ background: "#2C2C2C" }}></div>
      </div>
    );
  }
  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="schedule-control-section">
          <div className="col-lg-12 control-section">
            <div className="control-wrapper">
              <ScheduleComponent
                cssClass="virtual-scrolling"
                height="600px"
                width="100%"
                selectedDate={new Date()}
                eventSettings={{ dataSource: this.state.data }}
                rowAutoHeight={true}
                readonly={true}
              >
                <ViewsDirective>
                  <ViewDirective
                    option="TimelineMonth"
                    eventTemplate={this.eventTemplate.bind(this)}
                    allowVirtualScrolling={true}
                  />
                </ViewsDirective>
                <Inject services={[TimelineMonth, Resize, DragAndDrop]} />
              </ScheduleComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(TimeLine);
