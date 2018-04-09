import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { userLoggedIn } from '../../selectors/user';

const Navbar = ({ loggedIn }) => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
          <NavLink
              to="/"
              activeClassName="is-active"
              className="navbar-item branded has-text-weight-bold is-size-5"
          >
            <i className="fas fa-hands-helping"></i> Office Ante
          </NavLink>
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
          {
            loggedIn && (
              <NavLink
                  to="/about"
                  activeClassName="is-active"
                  className="navbar-item"
              >
                Dashboard
              </NavLink>
            )
          }
        </div>
          {
            !loggedIn ? (
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
            ) : (
              <div className="navbar-end">
                <NavLink
                    to="/"
                    activeClassName="is-active"
                    className="navbar-item"
                >
                  Logout
                </NavLink>
              </div>
            )
          }
      </div>
    </nav>
);

const mapStateToProps = (state) => ({
    loggedIn: userLoggedIn(state),
});

export default connect(
    mapStateToProps
)(Navbar);

export { Navbar };
