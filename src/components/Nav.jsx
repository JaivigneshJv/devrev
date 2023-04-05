import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import logo1 from "../images/acc.jpeg";
import "../components/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const email = localStorage.getItem("email");
  const [show, handleShow] = useState(false);
  // const handleLogout = () => {
  //   localStorage.clear("email");
  // };
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleAccountClick() {
    // handle click for account button
  }

  function handleLogoutClick() {
    localStorage.clear("email");
  }

  function handleWatchlistClick() {
    // handle click for watch list button
  }

  // function handleLogout() {
  //   localStorage.clear("email");
  // }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 200) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="Movies" />
      {/* <h2 className="user_container">{email}</h2> */}
      {/* <button onClick={handleLogout} className="logout_button">
          Log out
        </button> */}
      <div className="dropdown">
        <img
          onClick={toggleDropdown}
          className="nav_avatar"
          src={logo1}
          alt="Acc"
        />
        {isOpen && (
          <div className="dropdown-menu">
            <button onClick={handleAccountClick}>Account</button>
            <Link to="/SignedOut">
              <button onClick={handleLogoutClick}>Logout</button>
            </Link>
            <button onClick={handleWatchlistClick}>Watch List</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
