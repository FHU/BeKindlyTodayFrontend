// components/Navbar.js or components/Navbar.jsx
import { Link } from 'react-router-dom';
//import React from 'react';
import { BsCalendar4, BsPersonCircle } from 'react-icons/bs';

//import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using routing
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

function Navbar() {
  const inDev = import.meta.env.VITE_ENVIRONMENT;

  if (inDev !== 'dev') {
    const { login, register, isAuthenticated } = useKindeAuth();
    if (isAuthenticated) {
      return (
        <nav
          className="flex w-full h-24 text-2xl px-5 justify-between items-center"
          style={{ backgroundColor: '#2485A9', color: '#ffffff' }}
        >
          <Link
            to="/home"
            className="inline-block border-none hover:bg-transparent p-2 rounded-lg"
          >
            <img
              className="border-none hover:opacity-75"
              style={{ width: '80px', height: '80px' }}
              src={'src/assets/logo.png'}
              alt="logo"
            />
          </Link>
          <h1 className="text-5xl">BeKindly</h1>
          <div className="flex items-center">
            <Link to="/calendar" data-testid="calendar-link">
              <div className="btn text-5xl text-white pr-4 pt-2 bg-transparent border-hidden hover:bg-transparent hover:opacity-75">
                <BsCalendar4 />
              </div>
            </Link>
            <Link to="/profile" data-testid="profile-link">
              <div className="btn text-5xl text-white pt-2 bg-transparent border-hidden hover:bg-transparent hover:opacity-75">
                <BsPersonCircle />
              </div>
            </Link>
          </div>
        </nav>
      );
    } else {
      return (
        <nav
          className="flex w-full h-24 text-2xl px-5 justify-between items-center"
          style={{ backgroundColor: '#2485A9', color: '#ffffff' }}
        >
          <Link
            to="/home"
            className="inline-block border-none hover:bg-transparent p-2 rounded-lg"
          >
            <img
              className="border-none hover:opacity-75"
              style={{ width: '80px', height: '80px' }}
              src={'src/assets/logo.png'}
              alt="logo"
            />
          </Link>
          <h1 className="text-5xl ml-20">BeKindly</h1>
          <div className="flex items-center">
            <button
              onClick={() => login()}
              type="button"
              className="btn text-xl text-white pt-2 bg-transparent border-hidden hover:bg-transparent hover:opacity-75"
            >
              Sign In
            </button>
            <button
              onClick={() => register()}
              type="button"
              className="btn text-xl text-white pt-2 bg-transparent border-hidden hover:bg-transparent hover:opacity-75"
            >
              Sign Up
            </button>
          </div>
        </nav>
      );
    }
  } else {
    return (
      <nav
        className="flex w-full h-24 text-2xl px-5 justify-between items-center"
        style={{ backgroundColor: '#2485A9', color: '#ffffff' }}
      >
        <Link
          to="/home"
          className="inline-block border-none hover:bg-transparent p-2 rounded-lg"
        >
          <img
            className="border-none hover:opacity-75"
            style={{ width: '80px', height: '80px' }}
            src={'src/assets/logo.png'}
            alt="logo"
          />
        </Link>
        <h1 className="text-5xl">BeKindly</h1>
        <div className="flex items-center">
          <Link to="/calendar" data-testid="calendar-link">
            <div className="btn text-5xl text-white pr-4 pt-2 bg-transparent border-hidden hover:bg-transparent hover:opacity-75">
              <BsCalendar4 />
            </div>
          </Link>
          <Link to="/profile" data-testid="profile-link">
            <div className="btn text-5xl text-white pt-2 bg-transparent border-hidden hover:bg-transparent hover:opacity-75">
              <BsPersonCircle />
            </div>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
