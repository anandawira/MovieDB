class MovieItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set movie(movie) {
      console.log("haha");
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card">
            <img
              src="https://image.tmdb.org/t/p/w500/5BwqwxMEjeFtdknRV792Svo0K1v.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="d-flex flex-row">
                <h3 class="card-title flex-grow-1 my-auto">
                  Ad Astra (2019)
                </h3>
                <i class="far fa-heart my-auto" style="font-size: 30px;"></i>
              </div>

              <p class="card-text">
                The near future, a time when both hope and hardships drive
                humanity to look to the stars and beyond. While a mysterious
                phenomenon menaces to destroy life on planet Earth, astronaut
                Roy McBride undertakes a mission across the immensity of space
                and its many perils to uncover the truth about a lost expedition
                that decades before boldly faced emptiness and silence in search
                of the unknown.
              </p>
            </div>
          </div>`;
  }
}

customElements.define("movie-item", MovieItem);
