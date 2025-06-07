import HomePage from "../pages/home-page.js";
import renderFeedbackPage from "../pages/feed-back/feedback-page.js";
import ContactPage from "../pages/contact.js";
import BoneForm from "../pages/form/bone-form.js";
import GeneralDisease from "../pages/form/general-disease-form.js";
import DigestiveForm from "../pages/form/digestive-form.js";
import SkinForm from "../pages/form/skin-form.js";

class Router {
  constructor() {
    this.routes = {
      "/": () => new HomePage().render(),
      "/feedback": renderFeedbackPage,
      "/contact": () => ContactPage.render(),
      "/bone-form": () => BoneForm(),
      "/general-form": () => GeneralDisease(),
      "/digestive-form": () => DigestiveForm(),
      "/skin-form": () => SkinForm(),
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
    const initialRoute = window.location.hash.slice(1) || "/";
    this.loadPage(initialRoute);

    window.addEventListener("hashchange", () => {
      const route = window.location.hash.slice(1);
      if (this.routes[route]) {
        this.loadPage(route);
      } else {
        this.loadPage("/");
      }
    });
  }
}

export default new Router();
