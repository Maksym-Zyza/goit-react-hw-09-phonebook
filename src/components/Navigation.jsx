import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as authSelectors from "../redux/auth/auth-selectors";

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className="link" activeClassName="activeLink">
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className="link"
        activeClassName="activeLink"
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
