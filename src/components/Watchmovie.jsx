import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/Watchmovie.css";
import Nav from "./Nav";

function Watchmovie() {
  const { movieid } = useParams();
  const Url = `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045`;
  const [movie, setMovie] = useState([]);
  const movielink = "https://www.youtube.com/embed/" + movie + "?autoplay=1";
  useEffect(() => {
    axios.get(Url).then((response) => {
      setMovie(response.data.results[0].key);
      console.table(response.data);
      //   const movielink=
    });
  }, []);

  return (
    <div className="navsus">
      <Nav />
    <div className="yt_play">
      <iframe src={movielink} width="100%" height="100%" frameborder="0" />
    </div>
    </div>
  );
}

export default Watchmovie;
