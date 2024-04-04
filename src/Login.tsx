import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //TODO: Add Backend Logic Here (Verification)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  //TODO: Add Backend Logic Here (Email Recovery?)
  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 font-comfortaa">
      <div className="flex justify-center items-center mb-6">
        <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '200px', height: '200px' }} />
      </div>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="block font-semibold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <br/>
          <br/>
          <br/>
          <button onClick={handleForgotPassword} className="absolute right-0 bottom-0 mt-4 text-black focus:outline-none">Forgot Password?</button>
        </div>
        <button type="submit" className="w-full bg-#2485A9 text-white py-2 px-4 rounded-md hover:bg-#004E74 focus:outline-none focus:bg-#004E74" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
