import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/pre-loader.css';
import './utils/pre-loader.js';
import { links, owner_name, owner_desc, owner_pics } from '../public/data/data.json';

const profile = document.querySelector('#profile');
const linkList = document.querySelector('#link-list');

profile.innerHTML = `
  <h1 id="inform">- - -</h1>
  <img class="owner-pics" src="${owner_pics}" alt="My Pics">
  <h2>${owner_name}</h1>
  <h3>${owner_desc}</h3>
`;

let linkHTML = '';
links.forEach(link => {
  linkHTML += `
    <a href="${link.link}">
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