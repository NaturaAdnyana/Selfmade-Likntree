import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/pre-loader.css';
import './utils/pre-loader.js';

import { links } from '../public/data/data.json';

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
  document.querySelector('#link-list').innerHTML = linkHTML;
});