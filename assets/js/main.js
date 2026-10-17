/* Orpheus Realms · scripts compartidos */
(function () {
  "use strict";

  // Menú móvil
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
  }

  // Recordar el idioma elegido
  document.querySelectorAll("[data-lang-link]").forEach(function (a) {
    a.addEventListener("click", function () {
      try { localStorage.setItem("or-lang", a.getAttribute("data-lang-link")); } catch (e) {}
    });
  });

  // Avisos flotantes
  var toast = document.getElementById("toast");
  var timer = null;
  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(function () { toast.hidden = true; }, 4200);
  }
  document.querySelectorAll("[data-toast]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      showToast(b.getAttribute("data-toast"));
    });
  });

  // Formularios (no envían datos a ningún lado)
  document.querySelectorAll("form[data-msg]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var out = f.querySelector(".formmsg");
      if (out) { out.textContent = f.getAttribute("data-msg"); out.hidden = false; }
      f.reset();
    });
  });
})();
