import { Link } from 'react-router-dom';
import { BsCalendar4, BsPersonCircle } from 'react-icons/bs';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { getTodaysChallenge } from '../services/ChallengeService';

const Navbar = () => {
  const inDev = import.meta.env.VITE_ENVIRONMENT === 'dev';

  const { login, register, isAuthenticated } = useKindeAuth();

  console.log(getTodaysChallenge());
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
          src={'assets/logo.png'}
          alt="logo"
        />
      </Link>
      <h1 className="text-5xl">BeKindly</h1>
      <div className="flex items-center">
        {inDev || isAuthenticated ? (
          <>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
