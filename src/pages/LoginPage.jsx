// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const [error, setError] = useState(''); // Define the error state

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log('Username:', username, 'Password:', password);
//     setError('');

//     try {
//       const response = await axios.post('https://dummyjson.com/auth/login', {
//         username: username,
//         password: password,
//       });

//       if (response.data && response.data.accessToken) {
//         localStorage.setItem('authToken', response.data.accessToken);
//         localStorage.setItem('username', response.data.username); // Store username if needed
//         navigate('/dashboard');
//       } else {
//         setError('Authentication failed. Please try again.');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('Failed to connect to the authentication service.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-md shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
//             <input
//               type="text"
//               id="username"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
//             <input
//               type="password"
//               id="password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//           >
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const LoginPage = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();
// //   const [error, setError] = useState('');

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     try {
// //       const response = await axios.post('https://dummyjson.com/auth/login', { username, password });
// //       if (response.data && response.data.accessToken) {
// //         localStorage.setItem('authToken', response.data.accessToken);
// //         localStorage.setItem('username', response.data.username);
// //         navigate('/dashboard');
// //       } else {
// //         setError('Authentication failed. Please try again.');
// //       }
// //     } catch (err) {
// //       console.error('Login error:', err);
// //       setError('Failed to connect to the authentication service.');
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-screen bg-gray-100">
// //       <div className="bg-white p-8 rounded-md shadow-md w-96">
// //         <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Log In</h2>
// //         {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
// //         <form onSubmit={handleLogin} className="space-y-4">
// //           <div>
// //             <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
// //             <input
// //               type="text"
// //               id="username"
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
// //             <input
// //               type="password"
// //               id="password"
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
// //           >
// //             Log In
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;
// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', { username, password });
      if (response.data && response.data.accessToken) {
        localStorage.setItem('authToken', response.data.accessToken);
        localStorage.setItem('username', response.data.username);
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Failed to connect to the authentication service.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <Input
            id="username"
            label="Username:"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="password"
            label="Password:"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;