import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";
import Row from "../components/Row";
import requests from "../imdb/requests";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

function Watchlist() {
  const nav = useNavigate();
  const email = localStorage.getItem("email");
  console.log(email);
  useEffect(() => {
    if (!email) {
      nav("/signin");
    }
  }, []);
  return (
    <div className="row">
      <Nav />
      <Banner />
    </div>
  );
}

export default Watchlist;
