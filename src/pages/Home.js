import React, { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Auth from "../components/Auth";
import "./Home.css";

function Home() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="Home">
      {currentForm === "login" ? (
        <Signin onFormSwitch={toggleForm} />
      ) : currentForm === "register" ? (
        <Signup onFormSwitch={toggleForm} />
      ) : (
        <Auth />
      )}
    </div>
  );
}
export default Home;
