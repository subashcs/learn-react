import { Chart } from "react-google-charts";
import { MyChart } from "../components/MyChart";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";

const lineData = [
  ["Month", "Visitors"],
  ["January", 33],
  ["February", 53],
  ["March", 85],
  ["April", 41],
  ["May", 44],
];

const pieData = [
  ["Color", "Count"],
  ["Red", 300],
  ["Blue", 50],
  ["Yellow", 100],
];

const Dashboard = () => {
  return (
    <div>
      <div>
        <h3>Sales per month</h3>
        <Suspense fallback={<Spinner />}>
          <MyChart />
        </Suspense>
      </div>
      <div>
        <h3>Visitors per month</h3>
        <Chart
          chartType="Line"
          width="100%"
          height="400px"
          data={lineData}
          options={{ chart: { title: "Visitors per Month" } }}
        />
      </div>
      <div>
        <h3>Order Distribution</h3>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={pieData}
          options={{ title: "Color Distribution" }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
