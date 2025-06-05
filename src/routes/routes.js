import HomePage from "../pages/home-page.js";
import renderFeedbackPage from "../pages/feed-back/feedback-page.js";
import ContactPage from "../pages/contact.js";
import BoneForm from "../pages/form/bone-form.js";

class Router {
  constructor() {
    this.routes = {
      "/": () => new HomePage().render(),
      "/feedback": renderFeedbackPage,
      "/contact": () => ContactPage.render(),
      "/bone-form": () => BoneForm(),
    };
    this.currentRoute = "/";
    this.setupRouting();
  }

  async loadPage(route) {
    const view = this.routes[route] || this.routes["/"];
    const appElement = document.getElementById("app");
    appElement.innerHTML = "";
    const pageContent = await view();
    appElement.appendChild(pageContent);
  }

  setupRouting() {
    window.addEventListener("hashchange", () => {
      const route = window.location.hash.slice(1);
      if (this.routes[route]) {
        this.loadPage(route);
      } else {
        this.loadPage("/");
      }
    });

    this.loadPage(this.currentRoute);
  }
}

export default new Router();
