import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.classList.add('modal');
    this.elem.innerHTML =
      `<div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>`;
    this.elem.querySelector('.modal__close').addEventListener('click', this.close);
  }

  open() {
    document.querySelector("body").classList.add('is-modal-open');
    document.querySelector("body").append(this.elem);

    document.addEventListener('keydown', this.onKeyDown);

  }

  onKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.close();
    }
  }

  setTitle(title) {
    this.elem.querySelector(".modal__title").textContent = title;
  }

  setBody(node) {
    let modalBody = this.elem.querySelector('.modal__body');
    modalBody.innerHTML = '';
    modalBody.appendChild(node);
  }

  close = () => {
    document.querySelector("body").classList.remove('is-modal-open');
    this.elem.remove();

    document.removeEventListener('keydown', this.onKeyDown);
  }
}
