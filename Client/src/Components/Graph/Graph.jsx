import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  registerables,
  plugins,
} from "chart.js";
import "./graph.css";

const Graph = () => {
  Chart.register(...registerables);
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#4063ed",
        barThickness: 10,
        marginTop: 20,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {},
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <div className="graph-container">
        <h3>Plans</h3>
        <div className="bar-graph">
          <Bar data={data} options={options} className="graph" />
        </div>
      </div>
    </>
  );
};

export default Graph;
