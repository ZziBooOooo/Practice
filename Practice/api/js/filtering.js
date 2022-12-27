const active = document.querySelector(".active");
const active2 = document.querySelector(".active2");

womenImg.addEventListener("mouseenter", () => {
  console.log("hi");
  womenImg.style.transform = "scale(1.02)";
});

womenImg.addEventListener("mouseleave", () => {
  console.log("bye");
  womenImg.style.transform = "scale(1)";
});
