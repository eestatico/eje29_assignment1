# My Food Choices Website

## Overview  
I created a personal food-themed website called **My Food Choices** to highlight some of my favorite meals, recipes, and restaurants. The project demonstrates my ability to build a multi-page website using **HTML5 semantic elements**, **CSS styling**, and **JavaScript interactivity**.  

The website contains five linked pages with a consistent navigation bar, giving it a polished and user-friendly design.  

---

## Home Page (index.html)  
The home page introduces the site and sets the tone for the rest of the content.  

- Includes a welcome section with a short description.  
- Displays an image of pizza to highlight the theme.  
- Features a list of reasons why I enjoy my favorite foods.  
- Contains a nutrition table with calorie and protein content for foods like pizza, burgers, and tacos.  

---

## Food Page (food.html)  
The food page provides a general overview of some of my favorite meals.  

- Contains a short paragraph explaining why I enjoy a variety of foods.  
- Uses an ordered list to rank my top food picks.  
- Includes an image placeholder where I can feature one of the foods.  

---

## Pizza Page (pizza.html)  
The pizza page focuses entirely on pizza and introduces one of the interactive features.  

- Features a description of why pizza is versatile and delicious.  
- Uses an unordered list to show common pizza toppings.  
- Displays an image of pizza.  
- Includes a JavaScript button that opens Google Maps to search for *“pizza near me.”*  

---

## Recipes Page (recipes.html)  
The recipes page organizes meals in a structured format.  

- Contains a short description introducing the recipes.  
- Includes an image placeholder for recipes.  
- Uses a table with columns for dish name, prep time, and difficulty.  

---

## Restaurants Page (restaurants.html)  
The restaurants page highlights favorite dining spots.  

- Features a short introductory paragraph.  
- Includes an ordered list of restaurant choices.  
- Displays an image placeholder for a restaurant.  

---

## HTML Elements Used  
Throughout the site, I incorporated:  
- Semantic structure: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`  
- Content: `<h1>`, `<h2>`, `<p>` for headings and text  
- Lists: `<ul>`, `<ol>`, `<li>` for foods, toppings, and restaurants  
- Tables: `<table>`, `<thead>`, `<tbody>` for nutrition and recipes  
- Images: `<img>` with `alt` text for accessibility  
- Layout helpers: `<div>` and `<span>` with class attributes for targeted styling  

Validated using the [W3C HTML Validator](https://validator.w3.org/).  

---

## CSS Styling  
I applied consistent styling across the website to improve the design and usability:  

- Typography and layout: Arial font, centered text, max width for main content.  
- Navigation bar: Sticky at the top, styled links with hover, visited, and active states.  
- Images: Centered with borders, rounded corners, and shadows.  
- Tables: Alternating row colors, styled headers, and clean borders.  
- Footer: Dark background with white centered text.  

Validated using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).  

---

## JavaScript Interactivity  
I wrote two JavaScript functions to add interactivity:  

1. **Find Nearest Pizza Shop**  
   - A button on the pizza page.  
   - Opens Google Maps in a new tab and searches for pizza shops.  
   - Uses `window.open()` and event listeners.  

2. **Invert Colors / Dark Mode Toggle**  
   - A button toggles a CSS class (`.inverted`) on `<body>`.  
   - Flips the color scheme of the entire site.  
   - Uses `classList.toggle()` for simple theme switching.  

Both features are connected with event listeners inside a `DOMContentLoaded` block.  
No JavaScript errors were found in the web inspector.  

---

## Conclusion  
This project demonstrates:  
- Valid HTML5 structure with semantic elements.  
- Aesthetic CSS styling with validated rules.  
- Interactive JavaScript features that make the site engaging.  

The final result is a complete, multi-page website that highlights a fun theme while showcasing core web development skills.  
