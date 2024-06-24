import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js';

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const chartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ChartComponent = () => {
  return (
    <div>
      <Line data={chartData} options={chartOptions} redraw={true} chart={Chart} />
    </div>
  );
};

export default ChartComponent;