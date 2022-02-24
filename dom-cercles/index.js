// const c1 = document.querySelector(".c1");
// const c2 = document.querySelector(".c2");
// const c3 = document.querySelector(".c3");
// const btn3 = document.querySelector("#btn-3");
// const popup = document.querySelector(".popup");
// const btnPopup = document.querySelector("#popup-btn");

// window.addEventListener("mousemove", (e) => {
//   c1.style.left = e.x + "px";
//   c1.style.top = e.y + "px";

//   c2.style.left = e.x + "px";
//   c2.style.top = e.y + "px";

//   c3.style.left = e.x + "px";
//   c3.style.top = e.y + "px";
// });

// btn3.addEventListener("click", () => {
//   popup.style.right = "10px";
// });

// btnPopup.addEventListener("click", () => {
//   popup.style.right = "-300px";
// });

//OU

//Méthodes avec forEach
// const circles = document.querySelectorAll(".circle");

// window.addEventListener("mousemove", (e) => {
//   circles.forEach((circle) => {
//     circle.style.left = e.x + "px";
//     circle.style.top = e.y + "px";
//   });
// });

const circles = document.querySelectorAll(".circle");

window.addEventListener("mousemove", (e) => {
  circles.forEach((circle) => {
    circle.style.left = e.x + "px";
    circle.style.top = e.y + "px";
  });
});
