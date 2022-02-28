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
class TimeLine extends React.Component<RouteComponentProps> {
  data = [
    {
      Id: 1,
      Subject: "Explosion of Betelgeuse Star",
      StartTime: new Date(2018, 1, 15, 9, 30),
      EndTime: new Date(2018, 1, 15, 11, 0),
    },
    {
      Id: 2,
      Subject: "Thule Air Crash Report",
      StartTime: new Date(2018, 1, 12, 12, 0),
      EndTime: new Date(2018, 1, 12, 14, 0),
    },
    {
      Id: 3,
      Subject: "Blue Moon Eclipse",
      StartTime: new Date(2018, 1, 13, 9, 30),
      EndTime: new Date(2018, 1, 13, 11, 0),
    },
    {
      Id: 4,
      Subject: "Meteor Showers in 2018",
      StartTime: new Date(2018, 1, 14, 13, 0),
      EndTime: new Date(2018, 1, 14, 14, 30),
    },
  ];

  private instance: Internationalization = new Internationalization();

  private getTimeString(value: Date) {
    return this.instance.formatDate(value, { skeleton: "hm" });
  }
  private timelineEventTemplate(props: {
    PrimaryColor: any;
    SecondaryColor: any;
    Subject:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }): JSX.Element {
    return (
      <div className="template-wrap" style={{ background: props.PrimaryColor }}>
        <div
          className="subject"
          style={{
            background: props.SecondaryColor,
            borderRightWidth: 15,
            borderLeftWidth: 15,
            borderLeftColor: props.PrimaryColor,
            borderRightColor: props.PrimaryColor,
            borderLeftStyle: "solid",
            borderRightStyle: "solid",
          }}
        >
          {props.Subject}
        </div>
      </div>
    );
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
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <div className="image" key={i}>
              <img
                src={"/images/images/img_avatar.png"}
                alt={props.ImageName}
                width="50"
                height="50"
              />
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
        {/* <ScheduleComponent
          height="550px"
          selectedDate={new Date(2018, 1, 15)}
          eventSettings={{ dataSource: this.data }}
        ></ScheduleComponent> */}
        <ScheduleComponent
          height="800px"
          selectedDate={new Date(2018, 1, 15)}
          eventSettings={{ dataSource: this.data }}
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
