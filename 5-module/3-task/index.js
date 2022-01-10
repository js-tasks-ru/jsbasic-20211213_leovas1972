function initCarousel() {
  let currentSlideNumber = 0;
  let count = 4;
  let el = document.querySelector('[data-carousel-holder]');

  let carouselInnerEl = el.querySelector('.carousel__inner');
  let carouselArrowRight = el.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = el.querySelector('.carousel__arrow_left');

  update();

  el.onclick = ({ target }) => {
    if (target.closest('.carousel__arrow_right')) {
      currentSlideNumber++;
      update();
    };

    if (target.closest('.carousel__arrow_left')) {
      currentSlideNumber--;
      update();
    }

  };

  function update() {
    let position = -carouselInnerEl.offsetWidth * currentSlideNumber;
    carouselInnerEl.style.transform = `translateX(${position}px)`;

    currentSlideNumber == count - 1 ? carouselArrowRight.style.display = 'none' : carouselArrowRight.style.display = '';
    currentSlideNumber == 0 ? carouselArrowLeft.style.display = 'none' : carouselArrowLeft.style.display = '';
  }

}


