import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
              to="/"
              activeClassName="is-active"
              className="navbar-item"
          >
            Home
          </NavLink>
          <NavLink
              to="/about"
              activeClassName="is-active"
              className="navbar-item"
          >
            About
          </NavLink>
        </div>
        <div className="navbar-end">
            <NavLink
                to="/sign-up"
                activeClassName="is-active"
                className="navbar-item"
            >
              Sign Up
            </NavLink>
            <NavLink
                to="/login"
                activeClassName="is-active"
                className="navbar-item"
            >
              Login
            </NavLink>
        </div>
      </div>
    </nav>
);

export default Navbar;
