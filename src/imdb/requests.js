const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}$with_networks`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?${API_KEY}`,
  fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
};
export default requests;
