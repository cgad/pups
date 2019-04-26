import React from "react";
import { Link } from "react-router-dom";
import About from "../pages/About";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="#">
        pups
      </a> */}
      <Link to="/about" className="navbar-brand">pups</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">about </Link>
          </li>
          <li className="nav-item">
          <Link to="/discover" className="nav-link">discover </Link>
          </li>
          <li className="nav-item">
          <Link to="/search" className="nav-link">search </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
