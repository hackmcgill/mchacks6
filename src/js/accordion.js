const items = document.querySelectorAll('.accordion__item');

function closeAccordion() {
  this.classList.remove('active');
  Array.from(this.children).forEach(el => el.classList.remove('active'));
}

function toggleAccordion() {
  if (!this.classList.contains('active')) {
    Array.from(items)
      .filter(i => i.classList.contains('active'))
      .forEach(i => closeAccordion.bind(i)());
  }

  this.classList.toggle('active');
  Array.from(this.children).forEach(el => el.classList.toggle('active'));
}


items.forEach(item => item.addEventListener('click', toggleAccordion));
