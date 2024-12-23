import React, { useRef, useEffect } from "react";
import ApexCharts from "apexcharts";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [{ name: "PJU", data: data.map((item) => item.value) }],
      chart: { type: "bar", height: 350 },
      xaxis: { categories: data.map((item) => item.year) },
      colors: ["#114599"],
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default BarChart;
