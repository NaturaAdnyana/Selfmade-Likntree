import swal from 'sweetalert';

const linkButton = document.querySelector('#link-button');
let linkValue = linkButton.getAttribute('href');
console.log(linkValue);
if (linkValue == '#') {
  linkButton.addEventListener('click', function (event) {
    swal('Coming Soon', 'Sorry, website is under construction', 'warning');
  });
};