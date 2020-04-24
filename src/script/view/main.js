import "../component/movie-list.js";
import DataSource from "../data/data-source.js";

var main = () => {
  const nowShowingNav = document.querySelector("#nowShowingNav");
  const topMoviesNav = document.querySelector("#topMovieNav");

  const movieListElement = document.querySelector("movie-list");
  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    console.log(message);
  };

  // Search Button
  const searchButton = document.querySelector("#searchButton");
  const onButtonSearchClicked = event => {
    event.preventDefault();
    const searchInput = document.querySelector("#searchInput");
    topMoviesNav.classList.remove("active");
    nowShowingNav.classList.remove("active");
    DataSource.searchMovie(searchInput.value)
      .then(renderResult)
      .catch(fallbackResult);
  };
  searchButton.addEventListener("click", onButtonSearchClicked);

  // Popular Movie
  const showPopularMovie = () => {
    DataSource.popularMovie().then(renderResult).catch(fallbackResult);
    topMoviesNav.classList.add("active");
    nowShowingNav.classList.remove("active");
  };
  showPopularMovie();

  // Now Showing

  const nowShowing = () => {
    DataSource.nowShowing().then(renderResult).catch(fallbackResult);
    nowShowingNav.classList.add("active");
    topMoviesNav.classList.remove("active");
  };
  nowShowingNav.addEventListener("click", nowShowing);
  topMoviesNav.addEventListener("click", showPopularMovie);
};

export default main;
