import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import logo1 from "../images/acc.jpeg";
import "../components/nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="Movies" />

      <img className="nav_avatar" src={logo1} alt="Acc" />
    </div>
  );
}

export default Nav;
