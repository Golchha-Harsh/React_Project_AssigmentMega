  import React from 'react';
  import { Link, useNavigate } from 'react-router-dom';

  const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      navigate('/login');
    };

    return (
      <header style={{ backgroundColor: '#f0f0f0', padding: '10px 0', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Link to="/dashboard" style={{ fontWeight: 'bold', fontSize: '1.2em', textDecoration: 'none', color: '#333' }}>
            My Dashboard App
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            style={{ border: 'none', cursor: 'pointer' }} // Keep essential inline styles
          >
            Logout
          </button>
        </div>
      </header>
    );
  };

  export default Header;