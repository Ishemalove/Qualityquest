import React from 'react';

const productQualityStats = [
  { icon: '🏭', value: '88', label: 'Product Quality Index', change: '0.43%', changeType: 'up' },
  { icon: '💰', value: '$150', label: 'Price', change: '5%', changeType: 'down' },
  { icon: '📦', value: '200', label: 'Inventory', change: '20', changeType: 'up' },
  { icon: '📈', value: '30%', label: 'Profit Margin', change: '2%', changeType: 'up' },
];

const StatsCard = ({ icon, value, label, change, changeType }) => {
  return (
    <div className="p-6 bg-white shadow rounded-lg flex items-center flex-col md:flex-row">
      <div className="text-5xl mb-2 md:mb-0">{icon}</div>
      <div className="ml-0 md:ml-3 text-center md:text-left">
        <div className="text-lg font-bold">{value}</div>
        <div className="text-gray-500 text-lg">{label}</div>
        <div className={`text-xs ${changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {change} {changeType === 'up' ? '↑' : '↓'}
        </div>
      </div>
    </div>
  );
};

const DashCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {productQualityStats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashCards;
