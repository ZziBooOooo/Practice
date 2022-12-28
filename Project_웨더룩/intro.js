const logoImg = document.querySelector(".logoImg");

function translateLogo() {
  console.log("hi");
  logoImg.classList.add("translateLogoOn");
  console.log(logoImg.getBoundingClientRect());
  let logoPosition = logoImg.getBoundingClientRect();
  logoPosition.top = 0;
}
function showLogo() {
  logoImg.classList.add("logoOn");
}

window.addEventListener("load", () => {
  showLogo();
  setTimeout(() => {
    translateLogo();
  }, 3000);
  /*   logoImg.getAnimations().forEach((animation) => {
    console.log(animation);
    animation.effect.composite = "add";
  }); */
});
