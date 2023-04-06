import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import Banner from "./Banner";
import Row from "./Row";
import searchq from "../components/searchq.css";

function SearchQ() {
  const { searchq } = useParams();
  console.log(searchq);
  const searchq1 = 'RESULTS FOR " ' + searchq + '"';
  const Url = `https://api.themoviedb.org/3/search/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&query=${searchq}`;
  const [movies, setMovies] = useState([]);
  const [movie, setBanner] = useState([]);

  useEffect(() => {
    axios.get(Url).then((response) => {
      setMovies(response.data);
      setBanner(response.data.results[0].id);
    });
  }, []);
  return (
    <div className="search">
      <Nav />
      <Banner movieid={movie} />
      <Row title={searchq1} search={searchq} />
    </div>
  );
}

export default SearchQ;
