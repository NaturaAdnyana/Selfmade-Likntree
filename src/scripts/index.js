import "regenerator-runtime";
import "../styles/style.css";
import "../styles/pre-loader.css";
import "../styles/alert.css";
import "./utils/pre-loader.js";
import swal from "sweetalert";

const {
  owner_name,
  owner_desc,
  owner_pics,
  owner_announcement,
  links,
} = require("../public/data/data.json");

const profile = document.querySelector("#profile");
const linkList = document.querySelector("#link-list");

profile.innerHTML = `
  <h1 id="inform">${owner_announcement}</h1>
  <img class="owner-pics" src="${owner_pics}" alt="My Pics">
  <h2>${owner_name}</h1>
  <h3>${owner_desc}</h3>
`;

let linkHTML = "";
links.forEach((link) => {
  if (link.link == "#") {
    linkHTML += `
    <a id="link-button" href="${link.link}"
    onclick="swal({
      title: 'Coming Soon',
      text: 'Sorry, this page is under construction',
      icon: 'info',
      button: 'Sip',
      });">
    `;
  } else {
    linkHTML += `
    <a id="link-button" href="${link.link}" target="_blank" rel="noreferrer noopener">
    `;
  }
  linkHTML += `
      <div class="link-name">
        <h4>${link.name}</h4>
        <p>${link.desc}</p>
      </div>
      <div class="link-img">
        <img class="link-img" src="${link.icon}" alt="">
      </div>
    </a>
  `;
  linkList.innerHTML = linkHTML;
});
