import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chartjs-plugin-annotation';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Products', 'Standards', 'Quality', 'Prices'],
  datasets: [
    {
      data: [40, 30, 20, 10],
backgroundColor: ['#8e44ad', '#3498db', '#2c3e50', '#2980b9'],
hoverBackgroundColor: ['#8e44ad', '#3498db', '#2c3e50', '#2980b9'],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: 'Products Distribution',
      position: 'top',
    },
    filler: {
      propagate: true
  },
  },
};

const DonutChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-2xl mx-auto md:mx-0">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Products Distribution</div>
        <div className="text-gray-500">This Month <span className="ml-1">&#9662;</span></div>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
