const THEME_KEY = "theme"; // "light" | "dark"
const navLinks = document.getElementById("navLinks");

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const btn = document.getElementById("themeToggle");
const applyTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
//document.body.classList.toggle("dark", isDark);
  btn.setAttribute("aria-pressed", isDark);
};
// Initial theme & apply saved theme
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) {
  applyTheme(savedTheme === "dark" ? "dark" : "light");
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  applyTheme("dark");
}
btn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  const newTheme = isDark ? "dark" : "light";
  localStorage.setItem(THEME_KEY, newTheme);
  btn.setAttribute("aria-pressed", isDark);
});

