import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";

const Navbar = (props) => {
  return (
    <nav>
      <Link to="/" className="nav__projectName">
        greatPlaces
      </Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={PATHS.SEARCHPAGE} className="search">
              Search
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
