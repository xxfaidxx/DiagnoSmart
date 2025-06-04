import "../input.css";
import "../components/footer-bar.js";
import Router from "../routes/routes.js";

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  console.log("Token di index.js:", token);
  Router.setupRouting();
});
