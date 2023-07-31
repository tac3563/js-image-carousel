import "./styles/main.scss";

const slider = document.querySelectorAll('.project');
const sliderNext = document.querySelector('.next');
const sliderPrev = document.querySelector('.prev');

function toggleActiveClass() {
    const activeSlide = document.querySelector('.project.active');
    let targetSlide;

    if (this === sliderNext) {
        targetSlide = activeSlide.nextElementSibling || slider[0]; 
    } else if (this === sliderPrev) {
        targetSlide = activeSlide.previousElementSibling || slider[slider.length - 1]; 
    }
   
    activeSlide.classList.toggle('active');
    activeSlide.classList.toggle('hidden');
    targetSlide.classList.toggle('active');
    targetSlide.classList.toggle('hidden');
}

sliderNext.addEventListener( 'click', toggleActiveClass);
sliderPrev.addEventListener( 'click', toggleActiveClass);