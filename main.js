const headerMenu = document.querySelector("header");
const brandLogo = document.querySelector(".brand-logo")


window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    headerMenu.classList.add("white-bg");
    brandLogo.classList.add("hiden");
  } else {
    headerMenu.classList.remove("white-bg");
    brandLogo.classList.remove("hiden");
  }
});