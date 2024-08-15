import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card shadow p-4 text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-4">You have been logged out!</h2>
        <button className="btn btn-primary btn-lg w-100" onClick={handleLogout}>
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default Logout;
