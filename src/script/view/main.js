import '../component/movie-list.js';
import DataSource from "../data/data-source.js";

var main = () => {
    const movieListElement = document.querySelector("movie-list");
  const showPopularMovie = () => {
    DataSource.popularMovie().then(renderResult).catch(fallbackResult);
  };

  const renderResult = (results) => {
    // console.log(results);
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    console.log(message);
  };

  showPopularMovie();
};

export default main;
