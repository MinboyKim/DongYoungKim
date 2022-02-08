const homeIcon = document.querySelector(".title_home");
const banner = document.querySelector(".banner");

homeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  banner.classList.toggle("hidden");
});
