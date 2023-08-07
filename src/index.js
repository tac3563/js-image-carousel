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

    const sliderArray = [...slider];
    const activeSlideIndex = sliderArray.findIndex((slide) => slide.classList.contains('active'));

    sliderArray.forEach((item, index) => {
        item.classList.remove('furthest-left', 'left-index', 'right-index', 'furthest-right');

        if (index === activeSlideIndex - 2) {
            item.classList.add('furthest-left');
        } else if (index === activeSlideIndex - 1) {
            item.classList.add('left-index');
        } else if (index === activeSlideIndex + 1) {
            item.classList.add('right-index');
        } else if (index === activeSlideIndex + 2) {
            item.classList.add('furthest-right');
        }

        if (activeSlideIndex === 0) {
            sliderArray[sliderArray.length - 1].classList.add('furthest-left');
            sliderArray[sliderArray.length - 2].classList.add('left-index');
        } else if (activeSlideIndex === 1) {
            sliderArray[sliderArray.length - 1].classList.add('furthest-left');
        } else if (activeSlideIndex === 3) {
            sliderArray[sliderArray.length - 5].classList.add('furthest-right');
        } else if (activeSlideIndex === 4) {
            sliderArray[sliderArray.length - 5].classList.add('right-index');
            sliderArray[sliderArray.length - 4].classList.add('furthest-right');
        }
    });
}

sliderNext.addEventListener( 'click', toggleActiveClass);
sliderPrev.addEventListener( 'click', toggleActiveClass);