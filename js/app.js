document.documentElement.classList.replace("no-js", "js");

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#primary-navigation");

if (navToggle && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menu");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navLinks.classList.toggle("is-open", !isOpen);
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".navbar")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      navToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

const galleries = document.querySelectorAll(".project-gallery");

galleries.forEach((gallery) => {
  const mainImage = gallery.querySelector(".project-main-image");
  const thumbnails = gallery.querySelectorAll(".project-thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      mainImage.classList.add("changing");

      setTimeout(() => {
        const mainSrc = mainImage.src;
        const mainAlt = mainImage.alt;

        mainImage.src = thumbnail.src;
        mainImage.alt = thumbnail.alt;

        thumbnail.src = mainSrc;
        thumbnail.alt = mainAlt;

        mainImage.classList.remove("changing");
      }, 180);
    });
  });
});
