const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
const slider = document.querySelector(".slider");

let index = 0;
let interval;

// dots create
slides.forEach((slide, i) => {
  let dot = document.createElement("span");
  dot.classList.add("dot");

  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    showSlide();
  });
  dotsContainer.appendChild(dot);
});

// show Slide 
let dots = document.querySelectorAll(".dot");

function showSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

// Next Slide
function nextSlide() {
  index++;

  if (index >= slides.length) {
    index = 0;
  }
  showSlide();
}

//Previous Slide
function prevSlide() {
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide();
}

// Next Button
next.addEventListener("click", nextSlide);

//Previous Button
prev.addEventListener("click", prevSlide);

//Auto Slide 
function autoSlide() {
  interval = setInterval(nextSlide, 3000);
}
autoSlide();

//pause on hover
slider.addEventListener("mouseenter", () => {
  clearInterval(interval);
});
slider.addEventListener("mouseleave", () => {
  autoSlide();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSlide();
  }
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
});
