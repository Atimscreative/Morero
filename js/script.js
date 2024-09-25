const openModal = document.querySelector("#open"),
  closeModal = document.querySelector("#close"),
  overlay = document.querySelector("#overlay"),
  mobileMenu = document.querySelector("#mobile-menu");

const tabs = document.querySelector("[role='tablist']");
console.log(tabs);

/* ===================================== */
/* ===========-- FUNCTIONS --========== */
/* =================================== */

// MOBILE MENU CLOSE
function modalClose() {
  // ADD HIDE MENU CLASSNAME
  overlay.classList.add("hide-menu");
  mobileMenu.classList.add("hide-menu");

  // REMOVE SHOW MENU CLASSNAME
  overlay.classList.remove("show-menu");
  mobileMenu.classList.remove("show-menu");
  // console.log("CLicked", ...overlay.classList);
}

function modalOpen() {
  // REMOVE HIDE MENU CLASSNAME
  overlay.classList.remove("hide-menu");
  mobileMenu.classList.remove("hide-menu");

  // ADD SHOW MENU CLASSNAME
  overlay.classList.add("show-menu");
  mobileMenu.classList.add("show-menu");
  // console.log("CLicked", ...overlay.classList);
}

/* =================================== */
/* =========== EVENT LISTENERS========== */
/* =================================== */

// OPEN MODAL WHEN USER CLICK MENU ICON
openModal.addEventListener("click", modalOpen);

// CLOSE MODAL WHEN USER CLICK X ICON
closeModal.addEventListener("click", modalClose);

// CLOSE MODAL WHEN USER CLICK THE MOBILE OVERLAY
overlay.addEventListener("click", modalClose);

tabs.addEventListener("click", (e) => {
  e.preventDefault();
  // if(e.target)
  console.log(e, e.target, e.currentTarget, e.target.closest("button"));
});

/* =================================== */
/* ========== FAQS ACCORDION ========= */
/* =================================== */

const accordions = document.querySelectorAll(".accordion");
console.log(accordions);

/* =================================== */
/* ========== SWIPER JS ========= */
/* =================================== */
const swiper = new Swiper(".swiper", {
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 5,
      spaceBetween: 80,
    },
  },
  autoplay: {
    delay: 2000,
  },
});
