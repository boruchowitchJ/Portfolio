let leftdesign = document.querySelector(".left");
let right = document.querySelector(".right");
let container = document.querySelector(".container_left");

leftdesign.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

leftdesign.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

// Slider Code/