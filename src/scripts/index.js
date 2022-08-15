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
  links,
} = require("../public/data/data.json");

const profile = document.querySelector("#profile");
const linkList = document.querySelector("#link-list");

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning folks!";
} else if (time < 18) {
  greeting = "Good afternoon folks!";
} else {
  greeting = "Good evening folks!";
}

profile.innerHTML = `
  <h1 id="inform">- ${greeting} -</h1>
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
      <div class="link-img">
      <img class="link-img" src="${link.icon}" alt="">
      </div>
      <div class="link-name">
        <h4>
          ${link.name}
          ${link.new ? "<span class='new-label'>New!</span>" : ""} 
        </h4>
        <p>${link.desc}</p>
        </div>
        <div class="link-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
    </a>
  `;
  linkList.innerHTML = linkHTML;
});
