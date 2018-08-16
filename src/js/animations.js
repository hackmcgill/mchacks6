import anime from 'animejs';

anime.timeline({ loop: true })
  .add({
    targets: '.hero__bus',
    duration: 3000,
    elasticity: 0,
    translateX: '-55vw',
    easing: 'easeInOutQuart',
    delay: 1000,
  })
  .add({
    targets: '.hero__bus',
    duration: 3000,
    elasticity: 0,
    translateX: '-150vw',
    easing: 'easeInOutQuart',
    delay: 2000,
  });
