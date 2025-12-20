
import React from "react";
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">


              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

                <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}