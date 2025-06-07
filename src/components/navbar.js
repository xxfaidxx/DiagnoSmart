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
          height: 45px;
          margin-left: 1rem;
          margin-top : 0.7rem;
        }

        ul {
          display: flex;
          gap: 1.25rem;
          padding: 0;
          list-style-type: none; 
          margin-right : 1rem;
          font-size: 20px;
        }

        ul li a {
          color: white;
          font-weight: bold;
          text-decoration: none;
        }

        ul li a:hover {
          color: #000000;
        }
      </style>
      <nav><a href="#/">
        <img src="./images/icon.png" alt="DiagnoSmart Icon" /></a>
        <ul class="">
          <li><a href="#/">Home</a></li>
          <li><a href="#/feedback">Feedback</a></li>
          <li><a href="#/contact">Contact</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
