import React from "react";
import { LineChart } from "@mui/x-charts";

function Chart() {
  // Sample data for the Line Chart
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const salesData = [
    200, 300, 250, 400, 350, 500, 450, 600, 550, 700, 650, 800,
  ];
  const projectedData = [210, 320, 270, 420, 360, 520, 460, 620, 570, 720, 670, 820];
  return (
    <LineChart
      xAxis={[{ data: salesData.map((_, i) => i), label: "Month #" }]}
      series={[
        {
            data:projectedData,
            label:"Projected sales",
            color:"#ececec",
            area:true,
        },
        {
          data: salesData,
          label: "Monthly Sales",
          color: "#FFA726",
          area:true
        }
      ]}
      height={300}
      width={800}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}

export default Chart;
