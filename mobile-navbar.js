const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

// Section Card
const cards = document.querySelectorAll(".card");
//Disable see more function from the text contents that the height is less than the minimum visible height of a text content on page load.
window.onload = function () {
  cards.forEach((card) => {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector(".card-content .text");
    if (textContent.scrollHeight == textContent.clientHeight) {
      seeMoreBtn.style.display = "none";
      textContent.style.height = "fit-content";
    } else {
      card.classList.add("gradient");
    }
  });
}; //See more function on click the see more button on each card.
cards.forEach((card) => {
  let seeMoreBtn = card.querySelector(".see-more-btn");
  let textContent = card.querySelector(".card-content .text");
  seeMoreBtn.addEventListener("click", () => {
    card.classList.toggle("active");
    card.classList.toggle("gradient");
    if (card.classList.contains("active")) {
      seeMoreBtn.innerHTML = "See Less";
      textContent.style.height = textContent.scrollHeight + "px";
    } else {
      seeMoreBtn.innerHTML = "See More";
      textContent.style.height = "100px";
    }
  });
});

//Javacript for the scroll indicator bar
window.addEventListener("scroll", () => {
  const indicatorBar = document.querySelector(".scroll-indicator-bar");
  const pageScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = (pageScroll / height) * 100;
  indicatorBar.style.width = scrollValue + "%";
}); //Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});
