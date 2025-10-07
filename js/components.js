const basePath = window.location.pathname.includes('/pages/')
  ? window.location.pathname.split('/pages/')[0]
  : window.location.pathname.endsWith('/')
    ? window.location.pathname
    : window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);

async function loadComponent(id, file) {
  const element = document.getElementById(id);
  if (!element) return;
  const response = await fetch(basePath + file);
  const html = await response.text();
  element.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "pages/partials/header.html");
  loadComponent("footer", "pages/partials/footer.html");
});
