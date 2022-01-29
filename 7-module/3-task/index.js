export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();
    this.setValue(value);
    this.elem.addEventListener('click', this.onClick);
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.innerHTML =
      `<!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb">
      <span class="slider__value"></span>
    </div>

    <div class="slider__progress"></div>
    <!--Шаги слайдера-->
    <div class="slider__steps">
      ${'<span></span>'.repeat(this.steps)}
    </div>`;
  }

  setValue(value) {
    this.value = value;
    let valuePercents = value / this.segments * 100;

    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');

    thumb.style.left = `${valuePercents}%`;
    progress.style.width = `${valuePercents}%`;

    this.elem.querySelector('.slider__value').innerHTML = value;

    if (this.elem.querySelector('.slider__step-active')) {
      this.elem.querySelector('.slider__step-active')
        .classList.remove('slider__step-active');
    } else {
      this.elem.querySelector('.slider__steps')
        .children[this.value].classList.add('slider__step-active');
    }

  }

  onClick = (e) => {

    let left = e.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;

    let approximateValue = leftRelative * this.segments;
    this.setValue(Math.round(approximateValue));
    let customEvent = new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true
    });
    this.elem.dispatchEvent(customEvent);
    console.log(this.value);
  }




}
