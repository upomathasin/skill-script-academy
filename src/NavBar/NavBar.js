import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div className="navbar  border-l-stone-100 border-b-2 ">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl  font-bold uppercase">
            Skill Script Academy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn  " style={{ backgroundColor: "#11cbd7" }}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
