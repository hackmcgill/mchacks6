const items = document.querySelectorAll('.accordion__item');

function toggleAccordion() {
  this.classList.toggle('active');
  Array.from(this.children).forEach(el => el.classList.toggle('active'));
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
