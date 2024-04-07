import React from "react";
import { Link } from "react-router-dom";

export default function PublicNavbar() {
  const content = (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl font-bold">
          A1Tech
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Store</a>
          </li>
          <li>
            <label className="input input-bordered flex items-center gap-2 bg-white h-[35px] my-auto">
              <input
                type="text"
                className="grow h-10 bg-white focus:bg-white focus:w-50"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </li>
          <li className="relative z-20">
            <details>
              <summary>Account</summary>

              <ul className="p-2 rounded-t-none bg-white">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
  return content;
}
