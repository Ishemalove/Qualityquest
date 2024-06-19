import React from 'react';

const LatestNews = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow w-full max-w-4xl mx-auto md:mx-0 h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-semibold">Latest Product Quality News</div>
        <button className="bg-purple-700 text-white px-4 py-2 rounded">Check It</button>
      </div>
      <div className="text-gray-700">
        <ul>
          <li className="mb-4">
            <div className="font-bold">New Quality Assurance Standards Implemented</div>
            <div className="text-sm">Industry leaders adopt new quality assurance standards to ensure product excellence and customer satisfaction.</div>
          </li>
          <li className="mb-4">
            <div className="font-bold">Product Testing Innovations Unveiled at TechExpo</div>
            <div className="text-sm">Cutting-edge product testing technologies showcased at TechExpo promise to revolutionize quality control processes.</div>
          </li>
          <li className="mb-4">
            <div className="font-bold">Quality Assurance Trends for 2024</div>
            <div className="text-sm">Experts predict emerging quality assurance trends for the year, emphasizing the importance of continuous improvement.</div>
          </li>
          <li className="mb-4">
            <div className="font-bold">Customer Satisfaction Surveys Highlight Product Quality</div>
            <div className="text-sm">Recent customer surveys reveal high satisfaction levels with product quality, reflecting successful quality assurance measures.</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LatestNews;
