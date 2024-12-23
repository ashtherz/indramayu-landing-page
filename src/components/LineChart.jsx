import React, { useRef, useEffect } from "react";
import ApexCharts from "apexcharts";

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [{
        name: "PJU",
        data: data.map((item) => item.value)
      }],
      chart: {
        type: "area",
        height: 350,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false
          },
          export: {
            csv: {
              filename: 'PJU_Data_Statistics',
              columnDelimiter: ',',
              headerCategory: 'Year',
              headerValue: 'Value'
            },
            svg: {
              filename: 'PJU_Chart_Statistics'
            },
            png: {
              filename: 'PJU_Chart_Statistics'
            }
          }
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        colors: ['#114599']
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: '#114599',
              opacity: 0.4
            },
            {
              offset: 100,
              color: '#114599',
              opacity: 0.1
            }
          ]
        }
      },
      xaxis: {
        categories: data.map((item) => item.year),
        labels: {
          style: {
            colors: '#64748b',
            fontFamily: 'Inter, sans-serif'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#64748b',
            fontFamily: 'Inter, sans-serif'
          },
          formatter: (value) => Math.round(value)
        }
      },
      grid: {
        borderColor: '#f1f5f9',
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        size: 6,
        colors: ['#114599'],
        strokeColors: '#ffffff',
        strokeWidth: 2,
        hover: {
          size: 8
        }
      },
      tooltip: {
        theme: 'light',
        y: {
          formatter: (value) => value
        },
        marker: {
          show: true
        }
      }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, [data]);

  return <div ref={chartRef} className="w-full h-full"></div>;
};

export default LineChart;