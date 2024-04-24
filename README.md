# PROYECTO-MID-TERM


## Table of Contents
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Features](#features)
- [Development Diary](#development-diary)


## Description

Creation and deployment of a web page from scratch. Through a provided Figma file, I had to create the webpage, including its skeleton and styles, as well as making it functional.

This is a learning project for the Front End Web Developer bootcamp in IronHack.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Netlify (for deployment)

## Usage

To see this project in action, visit (URL of the website deployed on Netlify).

## Features

- **Adaptability and Accessibility**: Besides being fully responsive, the website follows best accessibility practices, ensuring all users, regardless of their capabilities, can navigate and interact with the content without barriers.

- **Responsive Design**: The website perfectly adapts to any screen size, ensuring users have an excellent browsing experience on both mobile devices and desktop.

- **Dynamic JavaScript Interactions**: We use JavaScript to add interactivity to the site, enhancing the user experience.
    - *Dynamic Project Loading*: On the project page, JavaScript is used to dynamically load the details of each project from an API, offering an updated view of recent work.

## Development Diary

In this section, I share my daily progress on the project, including the features I implemented, the challenges encountered, and how I solved them.

### Day 1: [21-04-2024]

**Progress:**
- Began creating the HTML skeleton of the HomePage.
- Created the sections that repeat on more than one web page.
    - Nav-bar
    - CTA section
    - Footer
- Designed these sections in CSS

**Challenges encountered:**
- In the footer, there's a section with links that was challenging to arrange.

**Solutions:**
- Tested both Flexbox and Grid to solve the positioning of these links, ultimately succeeding with Grid.

### Day 2: [22-04-2024]

**Progress:**

- Created the form for the "Contact Us" page.
- Made 'cards' for various sections.
- Finished the HTML and CSS of all pages.

**Challenges encountered:**
- Making the images in the 'Hero Section' responsive.
- In the form, aligning the 'email' and 'phone' inputs on the same line to occupy 100% of the container's width, as well as ensuring all fields have the same styles.
- Keeping the emojis in the 'Testimonial Section' fixed in one place.

**Solutions:**
- Applied a static size to the container and a percentage size to the images, in addition to setting their position to 'relative'.
- Placed both form fields in a container and made it flex, with a justify-content:space-between, and set the container's styles to flex:1 (so that both the email and phone occupy proportional space within the container).
- Read documentation and practiced with 'absolute' and 'relative' positions in different containers. Eventually, I set the position to 'relative' for the overall container to act as a reference frame for the emoji container, to which I gave a position at the top and left, and sizes of 100% so they occupy all the space within their parent. In turn, I also gave 'absolute' position to the emojis so that they are positioned in a specific location within the container.

### Day 3: [23-04-2024]

**Progress:**
- Making the page responsive.
- Starting with JavaScript.

**Challenges encountered:**
- I've created too many 'breakpoints', which has consumed a lot of my time. I've encountered problems especially with the 'burger menu'.

**Solutions:**
- Researching and testing many styles for the dropdown menu until I found one that I liked and was able to implement.

### Day 4: [24-04-2024]

**Progress:**
- Finish the JavaScript.
- Meeting with the teacher to suggest improvements:
    - Fix 'responsive' and leave only 3 sizes.
    - Change the way to do the fetch with an Async function.
    - Try to make at least one "utility function".
    - Extract 'header', 'cta-section', and 'footer' as modules and import them into the pages with JavaScript.
    - Try to make the nav-bar links change color depending on which page of the website you are on.

**Challenges encountered:**
- Not knowing what modules are or how they are implemented.
- Having the nav-bar links change color using only HTML and CSS.

**Solutions:**
- Look up information about modules and the function for them to work with JS.
- Search for options to implement the change of colors of the links without using JS, but it seems not possible, therefore I will research how to do it with JavaScript.