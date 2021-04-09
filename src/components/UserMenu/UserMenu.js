import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authOperations from "../../redux/auth/auth-operations";
import * as authSelectors from "../../redux/auth/auth-selectors";
import defaultAvatar from "./default-avatar.jpeg";

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logOut());
  const avatar = defaultAvatar;

  return (
    <div className="container">
      <img src={avatar} alt="" width="32" className="avatar" />
      <span className="name">Welcome, {name}</span>
      <button type="button" onClick={onLogout} className="user-btn">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;

// ========
// const mapStateToProps = (state) => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };
