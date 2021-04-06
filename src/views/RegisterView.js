import React, { useState } from "react";
import { connect } from "react-redux";
import * as authOperations from "../redux/auth/auth-operations";

const RegisterView = ({ onRegister }) => {
  const [name, setName] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };

  const [email, setEmail] = useState("");
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="wrapper">
      <h1 className="title">Registration</h1>

      <form onSubmit={handleSubmit} className="authForm" autoComplete="off">
        <label className="authLabel">
          Name
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={updateName}
          />
        </label>

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
          Registration
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);

// ========== class ========
// class RegisterView extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div className="wrapper">
//         <h1 className="title">Registration</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           className="authForm"
//           autoComplete="off"
//         >
//           <label className="authLabel">
//             Name
//             <input
//               className="input"
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

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
//             Registration
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
