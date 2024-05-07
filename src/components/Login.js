import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setCookie] = useCookies(['sessionid', 'csrftoken']);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/login/', {
        username,
        password,
      });

      const { sessionid, csrftoken } = response.data;
      setCookie('sessionid', sessionid, { path: '/' });
      setCookie('csrftoken', csrftoken, { path: '/' });

      // Redirect or perform any additional actions after successful login
      window.location.href = '/'; // Redirect to the home page
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;