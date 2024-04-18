// components/Navbar.js or components/Navbar.jsx
import { Link } from 'react-router-dom';
//import React from 'react';
import { BsCalendar4, BsPersonCircle} from "react-icons/bs";
//import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using routing

function Navbar() {
  return (
    <nav className="flex w-full h-24 text-2xl px-5 justify-between items-center bg-kindly-blue" style={{ backgroundColor: '#1964de', color: '#ffffff' }}>
      <Link to="/home" className='inline-block border-none hover:bg-transparent p-2 rounded-lg'><img className='border-none hover:opacity-75' style={{ width: '80px', height: '80px' }} src={'src/assets/bekindlyblue.svg'} alt='logo' /></Link>
      <h1 className="text-5xl">BeKindly</h1>
      <div className="flex items-center">
          <Link to="/calendar" data-testid="calendar-link"><div className="btn text-5xl text-white pr-4 pt-2 bg-transparent border-hidden hover:bg-transparent hover:opacity-75"><BsCalendar4 /></div></Link>
          <Link to="/profile" data-testid="profile-link"><div className="btn text-5xl text-white pt-2 bg-transparent border-hidden hover:bg-transparent hover:opacity-75"><BsPersonCircle /></div></Link>
      </div>
    </nav>

  );
}

export default Navbar;

