import React, { useEffect, useState } from "react";
import axios from "../imdb/axios";
import requests from "../imdb/requests";
import "../components/Banner.css";
// import { Link } from "react-router-dom";
import axios1 from "axios";
import { toast } from "react-toastify";

function Banner(props) {
  const [movie, setMovie] = useState([]);
  const movieid = props.movieid;

  function handleOnclicktoast() {
    //Todo: DB connect
    toast.info("Added to watchlist");
  }
  useEffect(() => {
    async function fetchData() {
      console.log(movieid);
      if (movieid) {
        const Url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=19f84e11932abbc79e6d83f82d6d1045`;
        const request = await axios1.get(Url);
        setMovie(request.data);
        console.log("hi");
        return request;
      } else {
        const request = await axios.get(requests.fetchTrending);
        setMovie(request.data.results[0]);
        console.log("hi1");
        return request;
      }
    }
    fetchData();
  }, [requests, movieid]);
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
            <button className="banner_button" onClick={handleOnclicktoast}>
              My List
            </button>
          </div>
          {/* <h1 className="banner_description">{movie?.overview}</h1> */}
        </div>
        <div className="banner_fade" />
      </header>
    </div>
  );
}

export default Banner;
