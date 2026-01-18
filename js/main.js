const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
