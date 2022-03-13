import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RouteComponentProps, withRouter } from "react-router";
import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  Month,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { Browser, Internationalization } from "@syncfusion/ej2-base";
import { ResearchController } from "../../../controllers/research/research_controller";
import { store } from "../../../data/store";
import { User } from "../../../data/models/responses/research/timeline_res";
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
              users:item.users
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
    users:User[];
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
        <div className="subject" style={{ background: props.PrimaryColor }}>
          {props.Subject}
        </div>
        <div className="time" style={{ background: props.PrimaryColor }}>
          Time: {this.getTimeString(props.StartTime)} -{" "}
          {this.getTimeString(props.EndTime)}
        </div>
        <div className="d-flex flex-nowrap">
          {props.users.map((item, i) => (
            <div className="image" key={i}>
              <img
                src={item.image}
                alt={props.ImageName}
                width="50"
                height="50"
              />
              <h1>{item.firstName}</h1>
            </div>
          ))}
        </div>

        <div className="event-description">{props.Description}</div>
        <div
          className="footer"
          style={{ background: props.PrimaryColor }}
        ></div>
      </div>
    );
  }
  render() {
    return (
      <div className="container-fluid research new-research">
        <ScheduleComponent
          height="800px"
          selectedDate={new Date()}
          eventSettings={{ dataSource: this.state.data }}
          rowAutoHeight={true}
          readonly={true}
        >
          <ViewsDirective>
            <ViewDirective
              option={Browser.isDevice ? "Day" : "Week"}
              eventTemplate={this.eventTemplate.bind(this)}
            />
          </ViewsDirective>
          <Inject services={[Day, Week, Month]} />
        </ScheduleComponent>
      </div>
    );
  }
}
export default withRouter(TimeLine);
