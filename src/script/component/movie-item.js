class MovieItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card shadow bg-white rounded m-0">
            <img
              src="https://image.tmdb.org/t/p/w500/${this._movie.backdrop_path}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body bg-light">
                <h3 class="card-title my-auto">
                  ${this._movie.original_title}
                </h3>

              <p class="card-text">
                ${this._movie.overview}
              </p>
            </div>
          </div>`;
  }
}

customElements.define("movie-item", MovieItem);
