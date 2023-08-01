let slider = tns({
  container: ".my-slider",
  slideBy: "1",
  speed: 200,
  nav: false,
  autoplay: true,
  controls: false,
  arrowKey: true,
  autoplayButtonOutput: false,
  autoplayHoverPause: true,
  responsive: {
    1600: {
      items: 4,
      gutter: 10,
    },
    1024: {
      items: 4,
      gutter: 10,
    },
    768: {
      items: 3,
      gutter: 10,
    },
    480: {
      items: 2,
      gutter: 1,
    },
  },
});
