import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import logo1 from "../images/acc.jpeg";
import "../components/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const email = localStorage.getItem("email");
  const [show, handleShow] = useState(false);

  const [search, setSearch] = useState("");
  const searchvalue = "/search/" + search;
  // const handleLogout = () => {
  //   localStorage.clear("email");
  // };
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleLogoutClick() {
    localStorage.clear("email");
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
      <Link to="/">
        <img className="nav_logo" src={logo} alt="Movies" />
      </Link>
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
        <div class="search-bar">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
          <Link to={searchvalue}>
            <button>Search</button>
          </Link>
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/Account">
              <button>Account</button>
            </Link>
            <Link to="/SignedOut">
              <button onClick={handleLogoutClick}>Logout</button>
            </Link>
            <Link to="/WatchList">
              <button>Watchlist</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
