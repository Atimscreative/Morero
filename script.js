const openModal = document.querySelector("#open"),
  closeModal = document.querySelector("#close"),
  overlay = document.querySelector("#overlay"),
  mobileMenu = document.querySelector("#mobile-menu"),
  navLists = document.querySelector("#nav-lists"),
  backtoTop = document.querySelector("#toTop");

/* ===================================== */
/* ===========-- MOBILE MENU OVERLAY --========== */
/* =================================== */
function modalClose() {
  // ADD HIDE MENU CLASSNAME
  overlay.classList.add("hide-menu");
  mobileMenu.classList.add("hide-menu");

  // REMOVE SHOW MENU CLASSNAME
  overlay.classList.remove("show-menu");
  mobileMenu.classList.remove("show-menu");
}

function modalOpen() {
  // REMOVE HIDE MENU CLASSNAME
  overlay.classList.remove("hide-menu");
  mobileMenu.classList.remove("hide-menu");

  // ADD SHOW MENU CLASSNAME
  overlay.classList.add("show-menu");
  mobileMenu.classList.add("show-menu");
}

// OPEN MODAL WHEN USER CLICK MENU ICON
openModal.addEventListener("click", modalOpen);

// CLOSE MODAL WHEN USER CLICK X ICON
closeModal.addEventListener("click", modalClose);

// CLOSE MODAL WHEN USER CLICK THE MOBILE OVERLAY
overlay.addEventListener("click", modalClose);

// CLOSE MOBILE MENU WHEN USER CLICK ANY NAV LINK
navLists.addEventListener("click", function (e) {
  const link = e.target.closest("a");

  if (!link) return;
  modalClose();
  console.log(link);
});

/* =================================== */
/* ========== FAQS ACCORDION ========= */
/* =================================== */
const accordionItems = document.querySelectorAll(".accordion");
accordionItems.forEach((item) => {
  const button = item.querySelector(".accordion-btn");
  button.addEventListener("click", () => {
    const icon = button.querySelector(".accordion-icon");
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

/* ================================== */
/*========== TABBED CONTENT ==========*/
/* ================================== */
const tabs = document.querySelectorAll(".feature-tab");
const tabContainer = document.querySelector('[role="tablist"]');
const tabContents = document.querySelectorAll(".feature-content");

tabContainer.addEventListener("click", (e) => {
  // TAB CLICKED
  const tabClicked = e.target.closest(".feature-tab");

  if (!tabClicked) return;

  // ACTIVE TAB
  tabs.forEach((tab) => tab.closest(".group").classList.remove("tab-active"));
  tabClicked.closest(".group").classList.add("tab-active");

  // ACTIVE CONTENT
  tabContents.forEach((content) => (content.style.display = "none"));
  document.querySelector(
    `#tabs-panel-${tabClicked.dataset.tab}`,
  ).style.display = "block";
});

// BACK TO TOP
document.addEventListener("scroll", () => {
  if (window.scrollY >= 350) {
    backtoTop.style.bottom = "20px";
  } else {
    backtoTop.style.bottom = "-40px";
  }
});
backtoTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
