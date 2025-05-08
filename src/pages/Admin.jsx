import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('Home'); // Navigate to home route
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      
      <button
        onClick={goToHome}
        className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Admin;
