'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// theme toggle (dark <-> light)
const rootEl = document.documentElement;
const themeToggleBtn = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");

const applyTheme = function (theme) {
  rootEl.setAttribute("data-theme", theme);

  if (!themeIcon) return;
  // light mode -> show moon (to switch back), dark mode -> show sunny
  themeIcon.setAttribute("name", theme === "light" ? "moon-outline" : "sunny-outline");
}

const getInitialTheme = function () {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) { /* ignore */ }

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }

  return "dark";
}

applyTheme(getInitialTheme());

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    const current = rootEl.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";

    try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
    applyTheme(next);
  });
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    const av = this.querySelector("[data-testimonials-avatar]");
    const ti = this.querySelector("[data-testimonials-title]");
    const tx = this.querySelector("[data-testimonials-text]");
    if (modalImg && av) {
      modalImg.src = av.src;
      modalImg.alt = av.alt;
    }
    if (modalTitle && ti) modalTitle.innerHTML = ti.innerHTML;
    if (modalText && tx) modalText.innerHTML = tx.innerHTML;

    testimonialsModalFunc();

  });

}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    const filterKey = this.getAttribute("data-filter");
    const selectedValue = filterKey != null ? filterKey : this.innerText.toLowerCase().trim();
    const labelSpan = this.querySelector("[data-i18n]");
    if (selectValue) {
      selectValue.textContent = labelSpan ? labelSpan.textContent : this.textContent.trim();
    }
    if (select) elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn.length ? filterBtn[0] : null;

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    const filterKey = this.getAttribute("data-filter");
    const selectedValue = filterKey != null ? filterKey : this.innerText.toLowerCase().trim();
    const labelSpan = this.querySelector("[data-i18n]");
    if (selectValue) {
      selectValue.textContent = labelSpan ? labelSpan.textContent : this.textContent.trim();
    }
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });
  }
}



// page navigation (data-nav-page matches article data-page; excludes theme/lang toggles)
const navigationLinks = document.querySelectorAll("[data-nav-link][data-nav-page]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.getAttribute("data-nav-page");
    if (!targetPage) return;

    for (let j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page === targetPage) {
        pages[j].classList.add("active");
      } else {
        pages[j].classList.remove("active");
      }
    }

    for (let j = 0; j < navigationLinks.length; j++) {
      if (navigationLinks[j].getAttribute("data-nav-page") === targetPage) {
        navigationLinks[j].classList.add("active");
      } else {
        navigationLinks[j].classList.remove("active");
      }
    }

    window.scrollTo(0, 0);
  });
}