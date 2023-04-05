import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Row from "../components/Row";
import requests from "../imdb/requests";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

function Landing() {
  const { User, setUser } = useContext(DataContext);
  // console.log(User);
  return (
    <div className="row">
        <Nav />
        
      <Banner />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} />
      <Row title="FANTASY " fetchUrl={requests.fetchFamily} />
      <Row title="DOCUMENTARY" fetchUrl={requests.fetchDocumentaries} />
      <Row title="POPULAR" fetchUrl={requests.fetchPopular} />
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ACTION " fetchUrl={requests.fetchActionMovies} />
      {/* <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies} /> */}
      {/* <Row title="UPCOMING" fetchUrl={requests.fetchUpcoming} /> */}
      {/* <Row title="ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} /> */}
    </div>
  );
}

export default Landing;
