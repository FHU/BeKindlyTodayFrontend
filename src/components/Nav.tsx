// components/Navbar.js or components/Navbar.jsx

import React from 'react';
import { CiCalendar } from "react-icons/ci";
//import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using routing

function Navbar() {
  return (
    <nav className="flex w-full h-24 text-2xl px-5 justify-between items-center" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>
      <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '65px', height: '65px' }} />
      <h1 className="text-5xl">BeKindly</h1>
      <div className="flex items-center">
          <div className="text-6xl text-black"><CiCalendar /></div>
          <div className="rounded-full bg-slate-100 p-7"></div>
      </div>
    </nav>
  );
}

export default Navbar;

