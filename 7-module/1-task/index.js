import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render(this.categories);
    this.initRibbon();
  }

  render(categories) {
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    this.elem.innerHTML =
      `<!--Кнопка прокрутки влево-->
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <nav class="ribbon__inner">
    </nav>

    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`

    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    for (let i = 0; i < this.categories.length; i++) {
      let ribbonItem = document.createElement('a');
      ribbonItem.href = '#';
      ribbonItem.classList.add('ribbon__item');
      ribbonItem.setAttribute('data-id', categories[i].id);
      ribbonItem.textContent = `${categories[i].name}`;
      ribbonInner.appendChild(ribbonItem);
    }


  }

  initRibbon() {
    let ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    
    console.log(ribbonInner.scrollWidth, ribbonInner.clientWidth);
    
    ribbonArrowLeft.onclick = function(){
      ribbonInner.scrollBy(-350, 0);
      console.log('ok-ok');
      //console.log(ribbonInner.getBoundingClientRect().left); 143
    }

    ribbonArrowRight.onclick = function(){
      ribbonInner.scrollBy(350, 0);
    }

   /*  ribbonInner.onscroll = function () {
      let scrollWidth = ribbonInner.scrollWidth; //1523
      console.log(scrollWidth);
      let scrollLeft = ribbonInner.scrollLeft;
      console.log(scrollLeft);
      let clientWidth = ribbonInner.clientWidth;
      console.log(clientWidth); // 988
      //let innerLeft = ribbonInner.getBoundingClientRect().left; //143
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft < 1) {
        ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      }

      if(scrollRight = (ribbonInner.pageXOffset < clientWidth)){
        ribbonArrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }
    }*/
 
    ribbonInner.addEventListener('scroll', function() {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      //let innerLeft = ribbonInner.getBoundingClientRect().left;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft < 1) {
        ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      }

      if(scrollRight = (ribbonInner.pageXOffset < clientWidth)){
        ribbonArrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }
      
    });

  } 

}

