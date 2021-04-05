import React from "react";
import { connect } from "react-redux";
import * as authOperations from "../../redux/auth/auth-operations";
import * as authSelectors from "../../redux/auth/auth-selectors";
import defaultAvatar from "./default-avatar.jpeg";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="container">
    <img src={avatar} alt="" width="32" className="avatar" />
    <span className="name">Welcome, {name}</span>
    <button type="button" onClick={onLogout} className="user-btn">
      Log out
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
