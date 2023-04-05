import React, { useEffect, useState } from "react";
import axios from "../imdb/axios";
import requests from "../imdb/requests";
import "../components/Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(request.data.results[1]);
      return request;
    }
    fetchData();
  }, []);
  //   console.log(movie);

  return (
    <div className="bannerblock">
      <header
        className="banner"
        style={{
          backgroundSize: "Cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <Link to="/Watchlist">
              <button className="banner_button">My List</button>
            </Link>
          </div>
          {/* <h1 className="banner_description">{movie?.overview}</h1> */}
        </div>
        <div className="banner_fade" />
      </header>
    </div>
  );
}

export default Banner;
