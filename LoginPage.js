import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    var promise=fetch("")
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      navigate('/ProductList');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='login-container'>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin} className='login-form'>
        <div className='login-from input'>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='login-form input'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='login-form button'>Login</button>
      </form>
    </div>
  );
}

export default Login;
