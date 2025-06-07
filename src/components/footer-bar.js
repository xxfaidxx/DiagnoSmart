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
        color: #000;
        font-weight: bold;
        font-size: 20px;
      }

      @media (max-width: 768px) {
        .footer {
          padding: 16px 10px;
          font-size: 18px;
        }
      }

      @media (max-width: 480px) {
        .footer {
          padding: 12px 8px;
          font-size: 16px;
        }
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
        &copy; DiagnoSmart<br/>
      </div>
    `;
  }
}

customElements.define("footer-bar", FooterBar);
