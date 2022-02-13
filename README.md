# Lendo Shopping Cart

Shopping Cart project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and it represents a minimal online shopping solution, which was given by Lendo AB as test assignment. For this project, provided JSON file was used as "backend".

<!-- <p align="center">

  <img src="./doc/react-shopping-cart-min.gif">
</p> -->

#### Requirements

- Node.js
- NPM
```javascript
/* First, Install the needed packages */
npm install

/* Then start both Node and React */
npm start

/* To run the tests */
npm test
```

#### Once developed application user will be able to perform the following actions:

- Browse products on The Home page;
- See the details about selected product and choose between available colors;
- Add a product to the own shopping cart (if selected product is unavailable, user will not be able to see 'Add to cart' button) 
  and be able to see a visual feedback when adding a product;
- Go back to The Home Page and continue browsing;
- Add another product(s) to the shopping cart;
- Proceed to The Checkout step and view the shopping cart;
- Modify quantity and/or remove the item from the cart;


<h4> Source folder structure </h4>
```
components -> 
                - CartTemplate
                - Nav
                - ProductTemplate

pages -> 
                - Checkout
                - Product
                - Products
App
index
```