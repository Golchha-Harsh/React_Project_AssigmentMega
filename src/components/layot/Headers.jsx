import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//Link used to navigate without page refresh
const Header = () => {
  const navigate = useNavigate();
//checks for token in local storage
  const isAuthenticated = !!localStorage.getItem('authToken');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <header style={{ backgroundColor: '#3A3A3A', padding: '10px 0'}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <Link
          to="/dashboard"
          style={{
            fontWeight: 'bold',
            fontSize: '1.2em',
            textDecoration: 'none',
            color: '#f0f0f0',
          }}
        >
        My Dashboard App
        </Link>

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            style={{ cursor: 'pointer' }}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
