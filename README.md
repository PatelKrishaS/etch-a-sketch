# Etch A Sketch

A browser-based sketch pad built with vanilla HTML, CSS, and JavaScript. Hover over the grid to draw with random colors that darken with each pass.

**Live demo:** https://patelkrishas.github.io/<etch-a-sketch>/

## Features
- 16x16 grid generated entirely with JavaScript
- Button to set a new grid size (1 to 100 squares per side) while the sketch pad stays the same total size
- Random RGB color on each square's first hover
- Progressive darkening: fully solid after 10 passes
- Input validation for Cancel, non-numbers, decimals, and out-of-range values

## Skills demonstrated
- DOM manipulation: `createElement`, `appendChild`, `classList`, `dataset`
- Event delegation with a single `mouseover` listener on the container
- Flexbox layout with `flex-wrap`, `flex-basis`, and `aspect-ratio`
- Dynamic sizing with `box-sizing: border-box` so borders don't break the grid
- Per-element state using `data-*` attributes
- Using `rgba` alpha instead of `opacity` so borders stay unchanged
- User input handling with `prompt` and validation
- Git, GitHub, and GitHub Pages deployment

## What I learned
My JS-set `flex-basis` kept failing because a hardcoded `flex` rule in the CSS was fighting it, which taught me to check where a style is really coming from. I also swapped `opacity` for `rgba` alpha so the border stayed untouched, and used `data-*` attributes to give each square its own hit counter and color.

## Run locally
Clone the repo and open `index.html` in a browser.