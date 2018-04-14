import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { userLoggedIn } from '../../selectors/user';

const Navbar = ({ loggedIn }) => (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
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
          {
            !loggedIn && (
              <div className="navbar-start">
                <NavLink
                    exact
                    to="/"
                    activeClassName="is-active"
                    className="navbar-item"
                >
                  Home
                </NavLink>
                <NavLink
                    exact
                    to="/about"
                    activeClassName="is-active"
                    className="navbar-item"
                >
                  About
                </NavLink>
              </div>
            )
          }
          {
            loggedIn && (
              <div className="navbar-start">
                <NavLink
                    exact
                    to="/challenges"
                    activeClassName="is-active"
                    className="navbar-item"
                >
                  Challenges
                </NavLink>
                <NavLink
                    exact
                    to="/create-challenge"
                    activeClassName="is-active"
                    className="navbar-item"
                >
                  Create Challenge
                </NavLink>
              </div>
            )
          }
          {
            !loggedIn ? (
              <div className="navbar-end">
                <NavLink
                    exact
                    to="/sign-up"
                    activeClassName="is-active"
                    className="navbar-item"
                >
                  Sign Up
                </NavLink>
                <NavLink
                    exact
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
