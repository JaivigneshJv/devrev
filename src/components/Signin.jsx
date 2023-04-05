import React, { useCallback, useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { toast } from "react-toastify";
import { DataContext } from "../context/DataProvider";
import logo from "../images/logo.png";

const Signin = (props) => {
  const { User, setUser } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userC) => {
        props.onFormSwitch("auth");
        // console.log(userC.user.email);
        setUser(userC.user.email);
        localStorage.setItem("email", JSON.stringify(userC.user.email));
      })
      .catch((e) => {
        toast.info(e.code);
      });
  };

  return (
    <div>
      <img className="test" src={logo} alt="" />
      <div className="signincon">
        <form className="signin-form" onSubmit={signin}>
          <h2>SIGN IN</h2>
          <div className="input-container">
            {/* <label for="email">Email:</label> */}
            <input
              type="email"
              id="email"
              placeholder="youremail@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            {/* <label for="password">Password:</label> */}
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit"> Log In</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Register Here.
        </button>
      </div>
    </div>
  );
};

export default Signin;
