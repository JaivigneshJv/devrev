import React from "react";
import { useParams } from "react-router-dom";

function MovieInfo() {
  const { movieid } = useParams();

  return <div>{movieid}</div>;
}

export default MovieInfo;