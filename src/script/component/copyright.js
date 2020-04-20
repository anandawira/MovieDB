class Copyright extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container text-center">
        <small>Copyright &copy; Ananda Wiradharma</small>
      </div>`;
  }
}

customElements.define("copyright-footer", Copyright);
