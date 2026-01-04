let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 80) {
    // Scroll vers le bas — cacher le header
    header.classList.add("header--hidden");
  } else {
    // Scroll vers le haut — afficher le header
    header.classList.remove("header--hidden");
  }

  lastScroll = currentScroll;
});