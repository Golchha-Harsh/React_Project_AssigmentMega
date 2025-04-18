import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import authApi from '../lib/authApi';

const LoginPage = () => {
  const [username, setUsername] = useState('');//Holds username and pass
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');//error if any during

  const handleLogin = async (e) => {
    e.preventDefault();//prevent page refresh on from default submission
    setError('');//clear prev error if any

    try {
      // const response = await axios.post('https://dummyjson.com/auth/login', {
      //   username: username,
      //   password: password,
      // });
      const response = await authApi.post('/auth/login', {
        username,
        password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem('authToken', response.data.accessToken);
        localStorage.setItem('username', response.data.username); // store username if needed
        navigate('/dashboard');
      } else {
        setError('Authentication failed. Please try again.');//if no token receieved from resonse
      }
    }
    //catch executes for bad network error and wrong credential 
    catch (err) {
      console.error('Login error:', err);
      setError('Failed to connect to the authentication service.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <Input
            id="username"
            label="Username:"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="password"
            type="password"
            label="Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Log In</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
