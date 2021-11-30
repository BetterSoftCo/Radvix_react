import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RouteComponentProps, withRouter } from "react-router";
import { ScheduleComponent , Inject , Day , Week , WorkWeek , Agenda , Month } from "@syncfusion/ej2-react-schedule";
class TimeLine extends React.Component<RouteComponentProps>   {
   
    data = [{
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2018, 1, 15, 9, 30),
        EndTime: new Date(2018, 1, 15, 11, 0)
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2018, 1, 12, 12, 0),
        EndTime: new Date(2018, 1, 12, 14, 0)
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2018, 1, 13, 9, 30),
        EndTime: new Date(2018, 1, 13, 11, 0)
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30)
    }];
  render() {
    return (
      <div className="container-fluid research new-research">
        {/* <ScheduleComponent
          height="550px"
          selectedDate={new Date(2018, 1, 15)}
          eventSettings={{ dataSource: this.data }}
        ></ScheduleComponent> */}
        <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: this.data }}>
        <Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
        </ScheduleComponent>
      </div>
    );
  }
}
export default withRouter(TimeLine);
