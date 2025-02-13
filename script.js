let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function slideShow() {
    index++;
    if (index >= totalSlides) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideShow, 3000); // Change slide every 3 seconds
