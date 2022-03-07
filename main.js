const headerMenu = document.querySelector("header");
const brandLogo = document.querySelector(".brand-logo");
const menuLink = document.querySelectorAll(".menu-link");


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

menuLink.forEach(e => {
  e.addEventListener("click",()=> {
    for(let item of menuLink) {
      item.classList.remove("tick")
    }
    e.classList.add("tick")
  })
})