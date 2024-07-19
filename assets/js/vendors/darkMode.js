(() => {
  "use strict";

  const runOnClientSide = () => {
    const t = () => localStorage.getItem("theme");

    const a = () => {
      var e = t();
      return e || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    };

    const r = e => {
      "auto" === e && window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.setAttribute("data-bs-theme", "dark") : document.documentElement.setAttribute("data-bs-theme", e);
    };

    const c = (r(a()), (e, t = false) => {
      var a = document.querySelector(".bs-theme-text"),
        r = document.querySelector(`[data-bs-theme-value="${e}"]`);
      document.querySelectorAll("[data-bs-theme-value]").forEach(e => {
        e.classList.remove("active"), e.setAttribute("aria-pressed", "false");
      });
      r.classList.add("active"), r.setAttribute("aria-pressed", "true"), a.textContent, r.dataset.bsThemeValue;
      a = e, e = document.querySelector(".theme-icon-active"), a = document.querySelector(`[data-bs-theme-value="${a}"] .theme-icon`), e && a && (e.innerHTML = a.outerHTML), t && r.focus();
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      var e = t();
      "light" !== e && "dark" !== e && r(a());
    });

    document.addEventListener("DOMContentLoaded", () => {
      c(a()), document.querySelectorAll("[data-bs-theme-value]").forEach(t => {
        t.addEventListener("click", () => {
          var e = t.getAttribute("data-bs-theme-value");
          localStorage.setItem("theme", e), r(e), c(e, !0);
        });
      });
    });
  };

  // Check if window is defined (i.e., if we're in the browser environment)
  if (typeof window !== 'undefined') {
    runOnClientSide();
  }
})();
