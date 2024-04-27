import { Link } from "react-router-dom";
import { BsCalendar4, BsPersonCircle } from "react-icons/bs";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Navbar = () => {
  const inDev = import.meta.env.VITE_ENVIRONMENT === "dev";

  const { login, register, isAuthenticated } = useKindeAuth();

  return (
    <nav className="grid grid-cols-3 h-[132px] w-full text-2xl px-2 sm:px-5 items-center bg-kindly-blue text-kindly-offWhite">
      <Link
        to="/home"
        className="flex items-center hover:bg-transparent rounded-lg w-20 h-20"
      >
        <div>
          <img
            className="border-none hover:opacity-75"
            src={"assets/bekindlyblue.svg"}
            alt="logo"
          />
        </div>
      </Link>
      <h1 className="text-3xl sm:text-5xl my-auto sm:justify-self-center justify-self-start">
        BeKindly
      </h1>
      <div className="flex justify-end items-center">
        {inDev || isAuthenticated ? (
          <div>
            <Link to="/calendar" data-testid="calendar-link">
              <div className="btn sm:px-2 px-1 text-3xl sm:text-5xl text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75">
                <BsCalendar4 />
              </div>
            </Link>
            <Link to="/profile" data-testid="profile-link">
              <div className="btn sm:px-2 px-1 text-3xl sm:text-5xl text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75">
                <BsPersonCircle />
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex sm:flex-row flex-col text-right my-4 items-center">
            <div>
              <button
                onClick={() => login()}
                type="button"
                className="btn shadow-none px-2 text-xs text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75"
              >
                Sign In
              </button>
            </div>
            <div className="text-xl hidden sm:block">/</div>
            <div className="text-xl block sm:hidden sm:border-0 border-b-2 w-10"></div>
            <div>
              <button
                onClick={() => register()}
                type="button"
                className="btn shadow-none px-2 text-xs text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
