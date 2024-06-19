import React from "react";
import { FaEnvelope, FaBell, FaUser } from "react-icons/fa";

const DashboardHeader = () => {
  const username = localStorage.getItem('username');

  return (
    <nav className="w-full p-3 flex justify-between items-center bg-white shadow fixed top-0 right-0 z-50">
      <div className="flex items-center pl-6">
        <h3 className="font-bold tracking-wide text-2xl text-gray-700">Welcome Back {username} 👋🏼</h3>
      </div>
      <div className="relative flex-1"></div>
      <div className="flex items-center space-x-4 pr-6">
        <FaEnvelope className="text-gray-500 cursor-pointer" />
        <FaBell className="text-gray-500 cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <FaUser className="text-white" />
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
