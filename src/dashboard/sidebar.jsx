import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaBars, FaTimes, FaUser, FaClipboardList, FaSignOutAlt, FaCog, FaTasks, FaList } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      <div className="flex items-center justify-between p-4 bg-green-700">
        <FaLeaf className="text-2xl" />
        <button className="md:hidden text-2xl" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`flex-1 flex flex-col items-center justify-center p-4 space-y-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:transform-none md:translate-x-0`}>
        <Link to="/dashboard" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaUser />
          <span className={`${isOpen ? 'inline' : 'hidden'} md:inline`}>Dashboard</span>
        </Link>
        <Link to="/homepage" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaClipboardList />
          <span className={`${isOpen ? 'inline' : 'hidden'} md:inline`}>Home</span>
        </Link>
        <Link to="/products" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaTasks />
          <span className={`${isOpen ? 'inline' : 'hidden'} md:inline`}>Services</span>
        </Link>
        <Link to="/profile" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaList />
          <span className={`${isOpen ? 'inline' : 'hidden'} md:inline`}>Profile</span>
        </Link>
        <Link to="/profile" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaCog />
          <span className={`${isOpen ? 'inline' : 'hidden'} md:inline`}>Settings</span>
        </Link>
        <Link to="/" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FaSignOutAlt />
          <span className={`${isOpen ? 'inline' : 'hidden'} md:inline`}>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
