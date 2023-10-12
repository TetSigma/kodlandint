const carousel = document.getElementById("carousel");
const prevButton = document.querySelector(".slider__prev");
const nextButton = document.querySelector(".slider__next");
const slides = document.querySelectorAll(".slider__slide");

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});


showSlide(currentIndex);
