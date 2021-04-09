import React from "react";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import * as authSelectors from "../redux/auth/auth-selectors";

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className="header">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
