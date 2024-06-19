import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Quality Level Level',
      data: [18, 20, 15, 22, 17, 21, 19],
      borderColor: 'rgba(200, 225, 132, 0.6)',
      backgroundColor: 'rgba(200, 225, 132, 0.6)',
      fill: true,
    },
    {
      label: 'Price level Level',
      data: [12, 15, 10, 16, 11, 14, 13],
      borderColor: 'rgba(225,225,225 0.6)',
      backgroundColor: 'rgba(225,225,225 0.6)',
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: ' Product Quality Trends',
    },
  },
};

const LineChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-2xl mx-auto md:mx-0">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="mb-4 md:mb-0">
          <span className="text-green-300 font-semibold">Quality Level</span> &bull; 
          <span className="text-black-500 font-semibold ml-2">Price Level</span>
          <div className="text-gray-500 text-sm">Last 7 Days</div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Day</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Week</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Month</button>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
