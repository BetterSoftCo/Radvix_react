import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
interface ChartAdminStateType {
  series: ApexOptions["series"];
  options: ApexOptions;
}
interface ChartAdminProp {
  data:
    | (number | null)[]
    | {
        x: any;
        y: any;
        fillColor?: string;
        strokeColor?: string;
        meta?: any;
        goals?: any;
      }[]
    | [number, number | null][]
    | [number, (number | null)[]][];
}
export class ChartAdmin extends React.Component<ChartAdminProp> {
  componentDidMount() {
    console.log(this.props , 'chart props');
  }
  state: ChartAdminStateType = {
    series: [
      {
        name: "User Signup",
        data: this.props.data,
      },
    ],
    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
        tickAmount: 6,
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },
  };
  render() {
    return (
      <div id="chart">
        <div id="chart-timeline">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    );
  }
}
