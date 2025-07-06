# Frontend Mentor - Advice Generator App Solution

This is a solution to the [Advice Generator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). This app fetches random advice from an API and displays it beautifully styled with CSS. Built with HTML, CSS, and JavaScript.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements (the dice button)
- Generate a new piece of advice by clicking the dice icon (using the [Advice Slip API](https://api.adviceslip.com))

### Screenshot

![Advice Generator App Screenshot](./screenshot.jpg)

---

### Links

- 📂 [GitHub Repo](https://github.com/dukee27/Projects/tree/main/advice-generator-app-main)
- 🌐 [Live Site](https://dukee27.github.io/Projects/advice-generator-app-main/)

---

## My Process

### Built With

- Semantic HTML5
- CSS Custom Properties (Variables)
- Flexbox & Grid
- Mobile-first responsive design
- JavaScript `fetch()` and async/await
- [Advice Slip API](https://api.adviceslip.com)

---

### What I Learned

I practiced:

- Centering a component using `flexbox` and `absolute` positioning
- Using `fetch()` with `async/await` for API integration
- Dynamically updating DOM elements with JavaScript
- Theming with `:root` CSS variables

Here’s a snippet I’m proud of:

```js
const diceBtn = document.getElementById("dice-btn");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  adviceId.textContent = `Advice #${data.slip.id}`;
  adviceText.textContent = `"${data.slip.advice}"`;
}

diceBtn.addEventListener("click", getAdvice);
