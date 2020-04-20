class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand d-flex" href="#">
          <i class="fas fa-film align-self-center" style="font-size: 70px;"></i>
          <h1 class="align-self-center mx-3">Movie Database</h1>
        </a>
        <ul class="nav nav-pills mr-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Top Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Now Showing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Favorite Movies</a>
          </li>
        </ul>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>`;
  }
}

customElements.define("app-bar", AppBar);