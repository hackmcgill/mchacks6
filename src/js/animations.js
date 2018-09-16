import anime from 'animejs';

anime
  .timeline({ loop: true })
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

const path = anime.path('#motionPath path');

anime({
  targets: '#motionPath .hero__plane',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'easeInOutSine',
  duration: 5000,
  loop: true,
});
