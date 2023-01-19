const mainSection = document.querySelector(".main-section");
const mobileNav = document.querySelector(".mobile-nav") 


function openModal() {
  mobileNav.classList.toggle("navList-mobile");
  mainSection.classList.toggle("comolomueveelbody");
}

function closeModal() {
  mobileNav.classList.toggle("navList-mobile");
  mainSection.classList.toggle("comolomueveelbody");
}