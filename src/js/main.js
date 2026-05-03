import "../css/style.css";
import lottie from "lottie-web";
import animationData from "../images/animation/rocket.json";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));

// document.getElementById("toggle").addEventListener("change", function () {
//   if (this.checked) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// });

// import lottie from 'lottie-web';

// const animation = lottie.loadAnimation({
//     container: document.getElementById('lottie-animation'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     animationData: "../images/animation/rocket.json"
// });


// پس از بارگذاری کامل DOM
document.addEventListener("DOMContentLoaded", () => {
  lottie.loadAnimation({
    container: document.getElementById("lottie-container"),
    renderer: "svg", // یا 'canvas' برای کارایی بهتر در انیمیشن‌های سنگین
    loop: true,
    autoplay: true,
    animationData: animationData, // استفاده مستقیم از داده JSON (بدون درخواست شبکه)
  });
});

const header = document.getElementById("main-header");
const SCROLL_THRESHOLD = 20; // مقدار اسکرول بر حسب پیکسل

window.addEventListener("scroll", () => {
  if (window.scrollY > SCROLL_THRESHOLD) {
    header.classList.add("main-header-scroll");
  } else {
    header.classList.remove("main-header-scroll");
  }
});
