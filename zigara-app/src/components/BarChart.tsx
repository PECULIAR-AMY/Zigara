import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register Chart.js components
ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Example data structure for BarChartData
export const BarChartData = {
  labels: [
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
  ], // X-axis labels for all months
  datasets: [
    {
      data: [30, 40, 50, 35, 25, 30, 35, 70, 60, 50, 25, 55], // Y-axis data points for all months
      backgroundColor: "#F2EFFF", // Bar fill color
      borderColor: "#F2EFFF", // Bar border color
      borderWidth: 2, // Bar border width
      borderRadius: 10
    },
  ],
};

export const BarChart: React.FC = () => {
  // Define chart options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: "Monthly Earnings", // Chart title
        font: {
          size: 16, // Title font size
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for the X-axis
        },
      },
      y: {
        display: false, // Hide the Y-axis
      },
    },
  };

  // Ensure data is correctly structured
  const data: ChartData<"bar"> = {
    labels: BarChartData.labels, // X-axis labels
    datasets: BarChartData.datasets, // Datasets for the chart
  };

  return <Bar options={options} data={data} />;
};