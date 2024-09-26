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

const accordionItems = document.querySelectorAll(".accordion");
console.log(accordionItems);

accordionItems.forEach((item) => {
  console.log(item);

  const button = item.querySelector(".accordion-btn");
  button.addEventListener("click", () => {
    const icon = button.querySelector(".accordion-icon"); // Use class instead of ID
    const content = item.querySelector(".panel");
    const isActive = button.getAttribute("data-active") === "true";

    // Close all other accordion items
    accordionItems.forEach((i) => {
      const otherButton = i.querySelector(".accordion-btn");
      const otherIcon = i.querySelector(".accordion-icon");
      const otherContent = i.querySelector(".panel");

      if (i !== item) {
        otherContent.style.maxHeight = 0;
        otherButton.setAttribute("data-active", "false");
        otherIcon.classList.remove("bx-minus");
        otherIcon.classList.add("bx-plus");
        otherContent.classList.remove("mt-4");
      }
    });

    // Toggle the current accordion item
    content.classList.toggle("max-h-10");

    // Toggle active state and icon
    if (!isActive) {
      button.setAttribute("data-active", "true");
      icon.classList.remove("bx-plus");
      icon.classList.add("bx-minus");
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("mt-4");
    } else {
      button.setAttribute("data-active", "false");
      icon.classList.remove("bx-minus");
      icon.classList.add("bx-plus");
      content.style.maxHeight = 0;
      content.classList.remove("mt-4");
    }
  });
});

/* =================================== */
/* ========== SWIPER JS ========= */
/* =================================== */
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

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
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freemode: true,
  freeModeMomentum: false,
});

/* ================================== */
/*========== TABBED CONTENT ==========*/
/* ================================== */

tabContainer.addEventListener("click", (e) => {
  const tabClicked = e.target.closest(".operations-tab");

  if (!tabClicked) return;

  // ACTIVE TAB
  tabs.forEach((tab) => tab.classList.remove("operations-tab-active"));
  tabClicked.classList.add("operations-tab-active");

  // ACTIVE CONTENT
  tabContents.forEach((content) =>
    content.classList.remove("operations-content-active"),
  );
  document
    .querySelector(`.operations-content-${tabClicked.dataset.tab}`)
    .classList.add("operations-content-active");
});
