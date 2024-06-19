import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!username) errors.username = 'Username is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (password && password.length < 8) errors.password = 'Password must be at least 8 characters long';
    return errors;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', { username, email, password });
      console.log(response);

      if (response.data.message === 'User created successfully') {
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/login');
      } else {
        setErrors(response.data.errors || {});
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setErrors({ generic: 'Error signing up. Please try again.' });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border border-black rounded-md p-8 max-w-md w-full bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        {errors.generic && <div className="text-red-500 mb-4">{errors.generic}</div>}
        <form onSubmit={handleSignUp} className="mb-4">
          <div className="mb-4">
            <label htmlFor="username" className="block font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`border px-3 py-2 rounded-md w-full ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="text-red-500 mt-1">{errors.username}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`border px-3 py-2 rounded-md w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="text-red-500 mt-1">{errors.email}</div>}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block font-bold mb-2">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className={`border px-3 py-2 rounded-md w-full ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && <div className="text-red-500 mt-1">{errors.password}</div>}
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <p>
              Already have an account?{' '}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => navigate('/login')}
              >
                Log in
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
