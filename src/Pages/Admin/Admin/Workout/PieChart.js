import React from "react";
import Chart from "react-apexcharts";

export default function ApexChart() {
  return React.createElement(Chart, {
    type: "pie",
    series: [80, 30, 150],
    options: {
      labels: ["Program", "Others", "Workout"],
      legend: {
        show: false
      },
      colors: ["#6F8FAF", "#FF5733", "#6495ED"]
    },
    height:"330"
  });
}
