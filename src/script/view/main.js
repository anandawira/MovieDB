import "../component/movie-list.js";
import DataSource from "../data/data-source.js";

var main = () => {
  const searchButton = document.querySelector(
    "body > header > app-bar > nav > form > button"
  );
  const searchInput = document.querySelector(
    "body > header > app-bar > nav > form > input"
  );
  const movieListElement = document.querySelector("movie-list");

  const showPopularMovie = () => {
    DataSource.popularMovie().then(renderResult).catch(fallbackResult);
  };

  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchInput.value)
      .then(renderResult)
      .catch(fallbackResult);
    console.log("haha");
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    console.log(message);
  };

  showPopularMovie();

  searchButton.addEventListener("click", onButtonSearchClicked);
};

export default main;
