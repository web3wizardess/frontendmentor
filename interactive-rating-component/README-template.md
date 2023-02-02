# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshots/rating%20card%20desktop%20view.jpg)
![](./screenshots/rating%20card%20mobile%20view.jpg)
![](./screenshots/thanks%20card%20desktop%20view.jpg)
![](./screenshots/thanks%20card%20mobile%20view.jpg)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interative-rating-component-using-flexbox-and-javascript-I8wA2jVvZP]
- Live Site URL: [https://interative-rating-component-by-kate.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

I learned how to trigger a CSS class using Javascript to make the next card appear once a rating had been submitted.


submitButton.addEventListener("click", () => {
    thanksCard.classList.remove("hidden")
    ratingCard.style.display = "none"
});


### Useful resources

- [
TsbSankara YouTube Channel](https://www.youtube.com/watch?v=cQnUopEeZgw) - I love to follow along with his Youtube tutorials.

## Author

- Website - [Coming soon...]
- Frontend Mentor - [@web3wizardess](https://www.frontendmentor.io/profile/web3wizardess)
- Twitter - [@web3wizardess](https://www.twitter.com/web3wizardess)



