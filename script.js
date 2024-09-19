const openModal = document.querySelector("#open"),
  closeModal = document.querySelector("#close"),
  overlay = document.querySelector("#overlay"),
  mobileMenu = document.querySelector("#mobile-menu");

openModal.addEventListener("click", () => {
  overlay.classList.add("right-0", "duration-300");
  mobileMenu.classList.add("right-0", "duration-300");
  console.log("CLicked");
});

closeModal.addEventListener("click", () => {
  overlay.classList.remove("right-0", "duration-300");
  mobileMenu.classList.remove("right-0", "duration-300");
});

function showModal() {}
