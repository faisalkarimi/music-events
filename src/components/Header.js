import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = ({ user, logout }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <a>DJ Events</a>
        </Link>
      </div>

      <input type="text" placeholder="Search..." />

      <nav>
        <ul>
          <li>
            <Link to="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            // If logged in
            <>
              <li>
                <Link to="/events/add">
                  <a>Add Event</a>
                </Link>
              </li>
              <li>
                <Link to="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </button>
              </li>
            </>
          ) : (
            // If logged out
            <>
              <li>
                <Link to="/account/login" className="btn-secondary btn-icon">
                  <a style={{ color: "#fff", marginRight: "0" }}>
                    <FontAwesomeIcon icon={faSignInAlt} />
                    Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
