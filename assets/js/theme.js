(function () {
  var STORAGE_KEY = "hank-wenton-theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☾" : "☀";
  }

  var saved = localStorage.getItem(STORAGE_KEY);
  applyTheme(saved || "dark");

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    applyTheme(saved || "dark");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  });
})();
