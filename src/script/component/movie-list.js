import "./movie-item.js";
class MovieList extends HTMLElement {
  constructor() {
    super();
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = "";
    console.log("render");
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.className = "card-deck col mx-auto my-3";
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    });
  }

  renderError(message) {
    console.log(message);
  }
}

customElements.define("movie-list", MovieList);
