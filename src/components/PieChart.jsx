import React, { useRef, useEffect, useState } from "react";
import ApexCharts from "apexcharts";

const PieChart = ({ data }) => {
  const chartRef = useRef(null);
  const [chartType, setChartType] = useState("donut"); // or "pie"

  useEffect(() => {
    const options = {
      series: data.map((item) => item.value),
      chart: {
        type: chartType,
        height: 400,
        background: 'transparent',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: -10,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false
          }
        }
      },
      labels: data.map((item) => `Tahun ${item.year}`),
      colors: ['#1e40af', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          donut: {
            size: chartType === 'donut' ? '75%' : '0%',
            labels: {
              show: chartType === 'donut',
              total: {
                show: chartType === 'donut',
                showAlways: chartType === 'donut',
                label: 'Total PJU',
                fontSize: '22px',
                fontWeight: 600,
                color: '#1e40af'
              },
              value: {
                fontSize: '20px',
                fontWeight: 500,
                color: '#1e40af'
              }
            }
          }
        }
      },
      stroke: {
        width: 0
      },
      dataLabels: {
        enabled: true,
        formatter: (val, opts) => {
          return opts.w.config.series[opts.seriesIndex]
        },
        style: {
          fontSize: '14px',
          fontWeight: 500,
          colors: ['#fff']
        },
        dropShadow: {
          enabled: true,
          blur: 3
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
        markers: {
          width: 12,
          height: 12,
          radius: 6
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        }
      },
      tooltip: {
        enabled: true,
        theme: 'dark',
        style: {
          fontSize: '14px'
        }
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.15
          }
        }
      }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, [data, chartType]);

  return (
    <div className="relative">
      {/* Chart Type Toggle */}
      <div className="absolute top-0 right-0 z-10 flex gap-2 mb-4">
        <button
          onClick={() => setChartType("donut")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            chartType === "donut"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Donut
        </button>
        <button
          onClick={() => setChartType("pie")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            chartType === "pie"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Pie
        </button>
      </div>

      {/* Chart */}
      <div ref={chartRef} className="w-full h-[400px]" />
    </div>
  );
};

export default PieChart;