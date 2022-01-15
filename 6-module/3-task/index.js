import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render(this.slides);
    this.initCarousel(this.slides);
  }

  render(slides) {
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.innerHTML =
      `<div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">  
      </div>`;

    let carouselInner = this.elem.querySelector('.carousel__inner');
    for (let i = 0; i < this.slides.length; i++) {
      let carouselSlide = document.createElement('div');
      carouselSlide.classList.add("carousel__slide");
      carouselSlide.setAttribute('data-id', slides[i].id);
      carouselSlide.innerHTML =
        `<img src="/assets/images/carousel/${slides[i].image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slides[i].price}</span>
          <div class="carousel__title">${slides[i].name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>`;


      carouselInner.appendChild(carouselSlide);

    }

  }

  initCarousel(slides) {
    let currentSlideNumber = 0;
    let count = slides.length;

    let carouselInner = this.elem.querySelector('.carousel__inner');
    let carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');

    update();

    this.elem.onclick = ({ target }) => {

      if (target.closest('.carousel__button')) {
        let id = target.closest('[data-id]').dataset.id;
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }));

      }

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
      let position = -carouselInner.offsetWidth * currentSlideNumber;
      carouselInner.style.transform = `translateX(${position}px)`;

      currentSlideNumber == count - 1 ? carouselArrowRight.style.display = 'none' : carouselArrowRight.style.display = '';
      currentSlideNumber == 0 ? carouselArrowLeft.style.display = 'none' : carouselArrowLeft.style.display = '';
    }

  }
}
