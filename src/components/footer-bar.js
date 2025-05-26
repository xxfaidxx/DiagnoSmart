class FooterBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        background-color: #f5f5f5;
        border-top: 1px solid #ddd;
        font-family: Arial, sans-serif;
      }

      .footer {
        padding: 24px 20px;
        text-align: center;
        color: #FF6500;
        font-weight: bold;
        font-size: 14px;
      }

      small {
        display: block;
        margin-top: 8px;
        font-weight: normal;
        color: #555;
        font-size: 12px;
      }

      .nav-buttons {
        margin-top: 12px;
        display: flex;
        justify-content: center;
        gap: 10px;
      }

      button {
        background-color: #FF6500;
        border: none;
        color: white;
        padding: 8px 16px;
        cursor: pointer;
        font-size: 12px;
        border-radius: 4px;
      }

      button:hover {
        background-color: #e05500;
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);

    this._shadowRoot.innerHTML += `
      <div class="footer">
        Diagnosmart &copy; 2025<br/>
        <small>Aplikasi web untuk mendeteksi penyakit berdasarkan input pengguna secara cepat dan akurat.</small>
      </div>
    `;
  }
}

customElements.define("footer-bar", FooterBar);
