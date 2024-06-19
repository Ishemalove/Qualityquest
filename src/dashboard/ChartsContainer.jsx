import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import DonutChart from './DonutChart';
import LatestNews from './LatestNews';

const ChartsContainer = () => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1 ml-20">
          <BarChart />
        </div>
        <div className="flex-3 mr-20">
          <LineChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <DonutChart />
        </div>
        <div className="flex-2">
          <LatestNews />
        </div>
      </div>
    </div>
  );
};

export default ChartsContainer;
