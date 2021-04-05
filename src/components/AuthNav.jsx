import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact className="link" activeClassName="activeLink">
      Registration
    </NavLink>

    <NavLink to="/login" exact className="link" activeClassName="activeLink">
      Login
    </NavLink>
  </div>
);

export default AuthNav;
