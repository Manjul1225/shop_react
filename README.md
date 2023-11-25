<img src='https://github.com/LeeBingler/ReactShop/assets/98109693/7f507a9b-7356-42f6-a1e2-98f2ae02514c' alt='ReactShop' width='100%' height='200px'/>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Static Badge](https://img.shields.io/badge/Dependencies-NPM-black)
![GitHub repo size](https://img.shields.io/github/repo-size/LeeBingler/ReactShop)

# ReactShop - An E-commerce Website

ReactShop is an impressive e-commerce website built with React.JS and Tailwind. It allows users to browse through various products and make purchases. The project's code is licensed under the MIT License, providing flexibility for usage and distribution.

## Tech Stack

Reactshop is developed using the following technologies:

1. **HTML:** The backbone of the web pages, providing the structure and content.
2. **CSS:** Responsible for the visual styling and layout of the website.
3. **JavaScript:** Adding interactivity and functionality to the site.

## Frameworks and Libraries

To enhance the development process and user experience, the following frameworks and libraries have been utilized:

1. **React:** A popular JavaScript library for building user interfaces, enabling fast and dynamic updates to the website.
2. **Tailwind:** A utility-first CSS framework that streamlines styling and allows for the creation of clean and responsive designs.
3. **Node.js** an open source, cross-platform runtime environment for executing JavaScript code it is used extensively for server-side programming.

## Testing Library

ReactShop uses the "Vitest" testing library to ensure the stability and correctness of the codebase. Automated testing is crucial for maintaining a reliable application.

## API Integration

The website is integrated with the [Stripe](https://stripe.com/en-fr) API, a payment processing platform that lets your business safely and effectively accept online and credit card payments, and the [Fake Store API](https://fakestoreapi.com/), a fictional API that provides product data. Two main API endpoints are used:

1. **Get all products:** Fetches a list of all available products from the API.
2. **Get a single product:** Retrieves detailed information about a specific product from the API.

Here's an example of how the API is utilized in JavaScript:

```javascript
// Get all products
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json));

// Get a single product
fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json));
```

## Build/Run and Deployment

To set up the project locally, you need Node.js and NPM installed on your machine.

### Website:

To run the website, follow these steps:
1. Clone the repository and navigate to the project folder.
2. Install the project dependencies using `npm install`.
3. Run the web application using `npm run dev`.
4. Run tests with `npm run test`.

For deployment, execute `npm run build`. The generated build files can then be hosted on a web server or a platform like Netlify for public access.

### Server:

To run the server, follow these steps:
1. Clone the repository and navigate to the project folder.
2. Install the project dependencies using `npm run build:server`.
3. Run the web application using `npm run start:server`.


## Copyright and License

The ReactShop project is open-source and distributed under the MIT License, granting users the freedom to use, modify, and distribute the code. For more details, refer to the License File provided in the project.

Feel free to explore the code, contribute, or use ReactShop as a foundation for your e-commerce projects. Happy coding!
