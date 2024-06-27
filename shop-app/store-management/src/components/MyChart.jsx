import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Chart } from "react-google-charts";

const barData = [
  ["Month", "Sales"],
  ["January", 65],
  ["February", 59],
  ["March", 80],
  ["April", 81],
  ["May", 56],
];

export const MyChart = () => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={barData}
      loader={<Spinner animation="border" />}
      options={{ chart: { title: "Sales per Month" } }}
    />
  );
};
