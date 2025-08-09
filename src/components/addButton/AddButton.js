import './addButton.css';

export default class AddButton {
  constructor() {
    this.addBtn = document.createElement('button');
    this.addBtn.classList.add('btn_add-ticket');
    this.addBtn.type = 'button';
    this.addBtnPlus = document.createElement('span');
    this.addBtnPlus.classList.add('btn_add-ticket__plus');
    this.addBtnPlus.textContent = '+';
    this.addBtn.append(this.addBtnPlus);
  }

  render(container) {
    container.append(this.addBtn);
  }

  setClickEvent(handler) {
    this.handler = handler;
    this.addBtn.addEventListener('click', this.handler);
  }
}
