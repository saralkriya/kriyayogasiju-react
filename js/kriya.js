(function () {
  "use strict";

  var seg = window.location.pathname.split("/").pop();
  var current = seg && seg.indexOf(".") !== -1 ? seg : "index.html";

  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href.charAt(0) === "#") return;
    if (href === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  var y = document.getElementById("ky-year");
  if (y) y.textContent = new Date().getFullYear();
})();
