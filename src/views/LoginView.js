import React, { useState } from "react";
import { connect } from "react-redux";
import * as authOperations from "../redux/auth/auth-operations";

const LoginView = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="wrapper">
      <h1 className="title">Please enter your login and password</h1>

      <form onSubmit={handleSubmit} className="authForm" autoComplete="off">
        <label className="authLabel">
          Mail
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
        </label>

        <label className="authLabel">
          Password
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </label>

        <button className="btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);

// ===== class =====
// class LoginView extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div className="wrapper">
//         <h1 className="title">Please enter your login and password</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           className="authForm"
//           autoComplete="off"
//         >
//           <label className="authLabel">
//             Mail
//             <input
//               className="input"
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className="authLabel">
//             Password
//             <input
//               className="input"
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button className="btn" type="submit">
//             Log in
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
