// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Dark mode toggle (optional)
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Optional dark theme
document.body.classList.contains("dark") && applyDarkTheme();

function applyDarkTheme() {
  document.documentElement.style.setProperty("--text", "#EEE");
  document.documentElement.style.setProperty("--light", "#1e1e1e");
  document.documentElement.style.setProperty("--dark", "#fff");
  document.body.style.backgroundColor = "#121212";
}
