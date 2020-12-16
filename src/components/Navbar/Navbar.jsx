import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import logo from "../../logo.svg";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" width="50" height="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {props.user ? (
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item ms-3">
                <Link
                  to={PATHS.SEARCHPAGE}
                  className="search authLink nav-link"
                >
                  Search
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  to={PATHS.FAVORITESPAGE}
                  className="favorites authLink nav-link"
                >
                  Favorites
                </Link>
              </li>
              <li className="nav-item ms-3">
                <button className="nav-logoutbtn" onClick={props.handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item ms-3">
                <Link to={PATHS.SIGNUPPAGE} className="authLink nav-link">
                  Signup
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link to={PATHS.LOGINPAGE} className="authLink nav-link">
                  Log In
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
