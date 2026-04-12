(function () {
  "use strict";

  function setCookie(name, value, days) {
    var expires = "";
    if (typeof days === "number") {
      var d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + d.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function clearGoogTransCookie() {
    setCookie("googtrans", "", -1);
    document.cookie = "googtrans=; path=/; max-age=0";
  }

  function currentLangFromCookie() {
    var m = document.cookie.match(/(?:^|;)\s*googtrans=([^;]+)/);
    if (!m) return "en";
    var v = decodeURIComponent(m[1].trim());
    if (v.indexOf("/en/ml") !== -1) return "ml";
    return "en";
  }

  function applyLang(code) {
    if (code === "en") {
      clearGoogTransCookie();
    } else {
      setCookie("googtrans", "/en/" + code, 365);
    }
    window.location.reload();
  }

  function syncLangUi() {
    var lang = currentLangFromCookie();
    document.querySelectorAll("[data-ky-lang]").forEach(function (el) {
      var code = el.getAttribute("data-ky-lang");
      el.classList.toggle("active", code === lang);
    });
  }

  window.googleTranslateElementInit = function () {
    if (typeof google === "undefined" || !google.translate || !google.translate.TranslateElement) return;
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,ml",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  document.addEventListener("DOMContentLoaded", function () {
    syncLangUi();
    document.querySelectorAll("[data-ky-lang]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        var code = el.getAttribute("data-ky-lang");
        if (!code || code === currentLangFromCookie()) return;
        applyLang(code);
      });
    });
  });
})();
