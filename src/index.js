import "./styles/main.scss";

const slider = document.querySelectorAll('.project');
const sliderNext = document.querySelector('.next');
const sliderPrev = document.querySelector('.prev');

function toggleActiveClass() {
    const activeSlide = document.querySelector('.project.active');
    let targetSlide;
    let direction;

    if (this === sliderNext) {
        targetSlide = activeSlide.nextElementSibling || slider[0]; 
        direction = 'left'
      
    } else if (this === sliderPrev) {
        targetSlide = activeSlide.previousElementSibling || slider[slider.length - 1]; 
        direction = 'right'
    }
   
    targetSlide.classList.add(`${direction}`, 'active');
    activeSlide.classList.toggle('hidden');
    activeSlide.classList.toggle('active');
    targetSlide.classList.toggle('hidden');

    setTimeout(() => {
        targetSlide.classList.remove(`${direction}`);
      }, 1200);
}


sliderNext.addEventListener( 'click', toggleActiveClass);
sliderPrev.addEventListener( 'click', toggleActiveClass);