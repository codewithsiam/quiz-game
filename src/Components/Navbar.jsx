import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const handleLogout = () => {
    setUser(false);
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Quiz Game</a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      {user ? (
        <div  className="navbar-end">
          <p onClick={handleLogout} className="btn">Logout</p>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="login" className="btn">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
