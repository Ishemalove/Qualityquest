import React, { useState } from "react";
import { Link, RouterProvider , createBrowserRouter, useNavigate} from "react-router-dom";
import axios from "axios";


// const handleLogin = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch(' http://localhost:5000', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });
//     const data = await response.json();
//     localStorage.setItem('token', data.token);
//     history.push('/dashboard');
//   } catch (error) {
//     console.error('Login failed:', error);
//     // Handle error and display to the user
//   }
// };


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user= {
      username, password
    }

    console.log("User data:", user)

    axios
    .post("http://localhost:5000/login", user)
    .then((result) => {
      console.log(result);
      if (result.data.message === "Login successful") {
        navigate("/dashboard");
      }
    })
    .catch((err) => console.log(err));
};
  

  return (  <div className="flex justify-center items-center h-70vh">
      <div className="border border-black rounded-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="mb-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          
            <button 
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
            >
              Login
            </button>
          
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );

}
export default Login;
