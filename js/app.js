const mainImage = document.querySelector("#project-main-image");
const thumbnails = document.querySelectorAll(".project-thumbnail");

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
