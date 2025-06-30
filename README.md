# Frontend Mentor - Arch Studio multi-page website solution

This is a solution to the [Arch Studio multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/arch-studio-multipage-website-wNIbOFYR6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email` or `Message` fields are empty should show "Can't be empty"
  - The `Email` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the contact page map. The addresses we have on the design are fictional, so you'll need to add real addresses for this bonus task.

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Arch-Studio-multi-page-website/blob/main/screenshot/Arch%20Studio%20Website%20Challenge%20-%20mobile%20-%20Homepage.png).
![screenshot mobile - menu](https://github.com/Lo-Deck/Arch-Studio-multi-page-website/blob/main/screenshot/Arch%20Studio%20Website%20Challenge%20-%20mobile%20-%20Homepage-menu.png).
![screenshot desktop - Homepage](https://github.com/Lo-Deck/Arch-Studio-multi-page-website/blob/main/screenshot/Arch%20Studio%20Website%20Challenge%20-%20desktop%20-%20Homepage.png).
![screenshot tablet - Contact](https://github.com/Lo-Deck/Arch-Studio-multi-page-website/blob/main/screenshot/Arch%20Studio%20Website%20Challenge%20-%20tablet%20-%20Contact.png).
![screenshot tablet - Portfolio](https://github.com/Lo-Deck/Arch-Studio-multi-page-website/blob/main/screenshot/Arch%20Studio%20Website%20Challenge%20-%20tablet%20-%20Portfolio.png).

### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Arch-Studio-multi-page-website).
- Live Site URL: [Website](https://lo-deck.github.io/Arch-Studio-multi-page-website/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

It was to make a challenge with different page, I learned how to be more comfortable doing this kind of challenge.

I learned how to use a map using `Leaflet` and have buttons linked to the map to zoom in. Control the zoom when you click on 'Left Ctrl' and use the scroll.

```js

btnMap.forEach( (item, index) => {

     item.addEventListener("click", () => {

         mapDiv.scrollIntoView({
                behavior: "smooth",
                block: "start"
         });

         if (index === 0){ 
             map.setView(mainOffice.getLatLng(), 10);
         }

         else{
             map.setView(secondOffice.getLatLng(), 10);
         }

    });

});

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [FreeCodeCamp](https://www.freecodecamp.org/) - I've been learning a lot.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
