class NavBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          background-color: #076ba1;
        }

        nav img {
          height: 50px;
        }

        ul {
          display: flex;
          gap: 1rem;
          padding: 0;
          list-style-type: none; 
        }

        ul li a {
          color: white;
          font-weight: bold;
          text-decoration: none;
        }

        ul li a:hover {
          color: #10b981;
        }
      </style>
      <nav>
        <img src="./images/icon.png" alt="DiagnoSmart Icon" />
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/feedback">Feedback</a></li>
          <li><a href="#/contact">Contact</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
