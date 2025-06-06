import "../input.css";
import "../components/footer-bar.js";
import "../pages/feed-back/supa-feedback.js";
import Router from "../routes/routes.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is fully loaded");
  Router.setupRouting();
});
