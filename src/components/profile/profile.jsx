import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/users/1'); // Replace '1' with the appropriate user ID
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (err) {
        setError('Error fetching user profile');
        console.error(err);
      }
    };
    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(`/api/users/1`, { name, email }); // Replace '1' with the appropriate user ID
      setUser(response.data);
    } catch (err) {
      setError('Error updating user profile');
      console.error(err);
    }
  };

  const handleLogout = () => {
    // Implement the logout functionality
    // (e.g., clear user session, redirect to login page)
  };

  if (!user) {
    if (error) {
      return <div>Error: {error}</div>;
    }
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleUpdateProfile}>Update Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;