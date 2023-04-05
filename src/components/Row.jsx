import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../imdb/axios";
import "../components/Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  //   const requests = axios.get(
  //     "https://api.themoviedb.org/3/trending/all/week?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US"
  //   );
  //   console.log(requests);
  //   console.log(fetchUrl);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //   console.table(movies);

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          // <Link
          //   to={`/${movie.id}`}
          //   className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          // >
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          // </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;
