# Hobby Bookshelf

## Overview

### Links

- Live Site URL : [hobby-bookshelf](https://leafy-duckanoo-a68971.netlify.app/#bestsellers)

## My Process

### Built with

- Mobile-first responsive design
- Semantic HTML
- Bootstrap
- Flexbox
- Vanilla Javascript
- tiny-slider

### What I learned

I learned how to create bookshelves with css styling. This is my first attempt at making a 3D-like model.

```css
.shelf {
  background-color: var(--shelf-color);
  display: flex;
  transform: skew(-55deg, 10.5turn);
  margin: 0 0 0 -10px;
  width: 100vw;
  height: 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.216);
  overflow: hidden;
  z-index: 1;
}

.shelf-2 {
  background-image: linear-gradient(
    var(--primary-color) 10% 20%,
    #f4f0eb 70% 100%
  );
  width: 100vw;
  height: 10px;
  margin: 0 0 0 -24px;
  box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  z-index: 3;
}
```

### Useful Resources

[Web Dev Tutorials] (https://www.youtube.com/watch?v=cmlkB3oaKOQ)

https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew

https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

https://developer.mozilla.org/en-US/docs/Web/CSS/z-index

https://cdnjs.com/libraries/tiny-slider

https://ganlanyuan.github.io/tiny-slider/?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library#responsive-options

### Inspired by

https://dribbble.com/shots/16279204-Book-Web-Store-Concept

https://dribbble.com/shots/16246812-Book-Store-Mobile-App

[mburnette] https://codepen.io/mburnette/pres/kGYmvR/right

[annampawl] https://codepen.io/annampawl/pen/rNJjowd

## Author

- Website - [Laura Doyon](https://lauradoyon.netlify.app/)
- CodePen - [@Itslocked]
- Frontend Mentor - [@L-itslocked](https://www.frontendmentor.io/profile//L-itslocked)
- LinkedIn - [@doyonlaura](https://www.linkedin.com/in/doyonlaura)
