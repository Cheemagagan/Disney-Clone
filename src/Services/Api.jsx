import axios from 'axios';

const moviebaseurl = 'https://api.themoviedb.org/3/';
const api_key = '188d7ea6f0c34360b549b4399214c4c0';

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=188d7ea6f0c34360b549b4399214c4c0';

const getTrendingMovies = axios.get(`${moviebaseurl}trending/all/day?api_key=${api_key}`);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id)
export default {
  getTrendingMovies,
  getMovieByGenreId
};
