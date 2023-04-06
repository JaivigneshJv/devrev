import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import react, { useEffect, useState } from "react";
import "../components/Movieinfo.css";
function Info() {
  const { movieid } = useParams();
  const Url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=19f84e11932abbc79e6d83f82d6d1045`;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(Url).then((response) => {
      setMovie(response.data);
      console.table(response.data);
    });
  }, []);
  const firstTwoRows = Object.entries(movie);
  console.table(firstTwoRows);
  return (
    <div className="movieinfo">
      <table>
        <tbody>
          {firstTwoRows.map(([key, value]) => {
            if (typeof value === "string" || typeof value === "number") {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Info;
