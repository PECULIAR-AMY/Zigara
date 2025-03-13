export const BarChartData: {
    labels: string[];
    datasets: { label: string; borderColor: string; borderWidth: number }[];
  } = {
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
      "Dec"
    ],
    datasets: [
      {
        label: "months",
        borderColor: "#F2EFFF",
        borderWidth: 1 // Added to match type definition
      }
    ]
  };
  