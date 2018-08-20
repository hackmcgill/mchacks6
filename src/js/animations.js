import anime from 'animejs';

anime.timeline({ loop: true })
  .add({
    targets: '.hero__bus',
    duration: 4000,
    elasticity: 0,
    translateX: '-55vw',
    easing: 'easeOutSine',
  })
  .add({
    targets: '.hero__bus',
    duration: 4000,
    elasticity: 0,
    translateX: '-200vw',
    easing: 'easeInSine',
    delay: 1000,
  });
