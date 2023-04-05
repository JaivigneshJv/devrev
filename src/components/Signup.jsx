import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { toast } from "react-toastify";
import logo from "../images/logo.png";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userC) => {
        console.log(userC);
        toast.info("Account Created Successfully Login");
        
        props.onFormSwitch("login");
      })
      .catch((e) => {
        console.log(e);
        toast.info(e.code);
      });
  };

  return (
    <div>
      <img className="test" src={logo} alt="" />
      <div className="signincon">
        <form className="signup-form" onSubmit={signup}>
          <h2>SIGN UP</h2>
          {/* <label for="email">Email : </label> */}
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {/* <label for="password">Password : </label> */}
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit"> Sign Up</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Login Here!
        </button>
      </div>
    </div>
  );
};

export default Signup;
