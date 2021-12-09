import React from "react";
import { Line } from "react-chartjs-2";
interface TableComponentProp {}

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      borderColor: "#0058FF",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#21D59B",
    },
  ],
};
export const UserSignups: React.FC<TableComponentProp> = () => {
  return <Line data={data} />;
};
