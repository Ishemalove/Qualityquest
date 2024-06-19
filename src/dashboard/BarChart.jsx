import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Quality Level',
      data: [18, 20, 15, 22, 17, 21, 19],
      backgroundColor: 'rgba(142, 68, 173, 0.6)',
    },
    {
      label: 'Price Level',
      data: [12, 15, 10, 16, 11, 14, 13],
      backgroundColor: 'rgba(44, 62, 80, 0.6)', 
    }
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
      text: 'Products This Week',
    },
  },
};

const BarChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-2xl mx-auto md:mx-0">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Products This Week</div>
        <div className="text-gray-500">This Week <span className="ml-1">&#9662;</span></div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
