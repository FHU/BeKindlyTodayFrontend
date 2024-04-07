import React, { useState } from 'react';
import './Login.css';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);


  //TODO: Add Backend Logic Here (Add User to Database)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 font-comfortaa">
      <div className="flex justify-center items-center mb-6">
        <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '200px', height: '200px' }} />
      </div>
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
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
        <div className="mb-4">
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
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-semibold mb-2">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className={`w-full p-2 border rounded-md focus:outline-none ${!passwordMatch ? 'border-red-500' : 'focus:border-blue-500'}`}
            required
          />
          {!passwordMatch && <p className="text-red-500 text-sm">Passwords do not match</p>}
        </div>
        <button type="submit" className="w-full bg-#2485A9 text-white py-2 px-4 rounded-md hover:bg-#004E74 focus:outline-none focus:bg-#004E74" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
