import { Chart } from "react-google-charts";

const Dashboard = () => {
  const barData = [
    ["Month", "Sales"],
    ["January", 65],
    ["February", 59],
    ["March", 80],
    ["April", 81],
    ["May", 56],
  ];

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

  return (
    <div>
      <div>
        <h3>Sales per month</h3>
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={barData}
          options={{ chart: { title: "Sales per Month" } }}
        />
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
