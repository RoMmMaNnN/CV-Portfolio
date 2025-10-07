async function loadComponent(id, file) {
  const element = document.getElementById(id);
  if (!element) return;

  const response = await fetch(file);
  const html = await response.text();
  element.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/CV-Portfolio/") {
    loadComponent("header", "pages/partials/header.html");
    loadComponent("footer", "pages/partials/footer.html");
  } else {
    loadComponent("header", "../pages/partials/header.html");
    loadComponent("footer", "../pages/partials/footer.html");
  }
});
