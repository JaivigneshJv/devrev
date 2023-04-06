import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import Banner from "./Banner";
import Info from "./Info";

function MovieInfo() {
  const { movieid } = useParams();
  const Url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=19f84e11932abbc79e6d83f82d6d1045`;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(Url).then((response) => {
      setMovie(response.data);
      // console.table(response.data);
    });
  }, []);
  return (
    <div className="Movieinfo">
      {/* ${movieid} */}
      <Nav />
      <Banner movieid={movieid} />
      <Info />
    </div>
  );
}
export default MovieInfo;
