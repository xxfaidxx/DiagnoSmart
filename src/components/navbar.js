class NavBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #076ba1;
          position: relative;
        }

        nav img {
          height: 45px;
          margin-left: 1rem;
          margin-top: 0.7rem;
        }

        ul {
          display: flex;
          gap: 1.25rem;
          padding: 0;
          list-style-type: none;
          margin-right: 1rem;
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

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .menu-toggle div {
          width: 30px;
          height: 4px;
          background-color: white;
          border-radius: 2px;
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            align-items: flex-start;
          }

          nav img {
            margin-top: 0;
            margin-left: 0;
          }

          ul {
            display: none;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            text-align: left;
          }

          ul li {
            width: 100%;
          }
          ul.show {
            display: flex;
          }

          .menu-toggle {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          nav {
            padding: 0.5rem;
          }

          ul {
            font-size: 16px;
          }
        }
      </style>
      <nav>
        <a href="#/">
          <img src="./images/icon.png" alt="DiagnoSmart Icon" />
        </a>
        <div class="menu-toggle" id="menu-toggle">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="menu">
          <li><a href="#/">Home</a></li>
          <li><a href="#/feedback">Feedback</a></li>
          <li><a href="#/contact">Contact</a></li>
        </ul>
      </nav>
    `;

    const menuToggle = this.shadowRoot.querySelector("#menu-toggle");
    const menu = this.shadowRoot.querySelector("#menu");

    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
}

customElements.define("nav-bar", NavBar);
