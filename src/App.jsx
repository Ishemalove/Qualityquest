import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/Login/Login';
import Products from './components/pages/Products';
import Create from './components/pages/create';
import Update from './components/pages/Update';
import HomePage from './components/HomePage';
import Dashboard from './dashboard/Dashboard';

// Helper component for protected routes
const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return <Component {...rest} />;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProtectedRoute element={Products} />} />
          <Route path="/create" element={<ProtectedRoute element={Create} />} />
          <Route path="/update/:id" element={<ProtectedRoute element={Update} />} />
          <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
