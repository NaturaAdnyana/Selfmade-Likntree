const preloader = document.querySelector("#pre-loader");
const content = document.querySelector("#content");

preloader.innerHTML = `
  <div class="loadingio-spinner-pulse-ox5rqih3sel"><div class="ldio-n7trox3rja">
  <div></div><div></div><div></div>
  </div></div>
`;

window.addEventListener("load", () => {
  preloader.style.background =
    "linear-gradient(0deg, rgba(0,212,255,0) 0%, rgba(0,0,0,1) 35%)";
  preloader.style.top = "-900px";
  setTimeout(() => {
    preloader.remove();
  }, 1000);
  setTimeout(() => {
    content.style.opacity = "1";
  }, 500);
});
