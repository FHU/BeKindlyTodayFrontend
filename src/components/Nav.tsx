import { Link } from "react-router-dom";
import { BsCalendar4, BsPersonCircle } from "react-icons/bs";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Navbar = () => {
  const inDev = import.meta.env.VITE_ENVIRONMENT === "dev";

  const { login, register, isAuthenticated } = useKindeAuth();

  return (
    <nav
      className="flex w-full text-2xl px-5 bg-kindly-blue justify-between items-center"
      style={{ color: "#ffffff" }}
    >
      <Link
        to="/home"
        className="flex items-center hover:bg-transparent p-2 rounded-lg w-20 h-20"
      >
        <div>
          <img
            className="border-none hover:opacity-75"
            src={"assets/bekindlyblue.svg"}
            alt="logo"
          />
        </div>
      </Link>
      <h1 className="text-4xl md:text-5xl justify-self-center">BeKindly</h1>
      <div className="flex items-center">
        {inDev || isAuthenticated ? (
          <div>
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
        ) : (
          <div className="text-right">
            <button
              onClick={() => login()}
              type="button"
              className="btn text-sm md:text-xl text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75"
            >
              Sign In
            </button>
            <button
              onClick={() => register()}
              type="button"
              className="btn text-sm md:text-xl text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
