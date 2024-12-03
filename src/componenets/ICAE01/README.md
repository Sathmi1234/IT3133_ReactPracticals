# In-Course Assesment Examination 01

This React application implements a **Flower Shop** where users can browse flowers, select quantities, add them to a cart, and view their cart total.

---

## Features

1. **Product Listing**  
   - Displays a list of available flowers with their images and prices.  

2. **Quantity Selection**  
   - Users can specify the quantity of a flower to purchase.  

3. **Add to Cart**  
   - Adds selected flowers with their specified quantities to the cart.  
   - Updates the quantity of an existing item if it's already in the cart.  

4. **Cart Management**  
   - Displays a summary of items in the cart, including quantity, price, and a grand total.  

---

## Folder Structure

```
src/
├── components/
│   ├── ICAE01/
|   |   ├── components/
│   │   |       |── Product.js
│   │   |       |── Products.js
│   │   |       ├── Cart.js
│   │   |       ├── FlowerDB.js
│   │   ├── assets/
│   │   │   ├── CSS/
│   │   │   │   ├── layout.css
│   │   │   ├── image/
│   │   │       ├── [flower images]
├── App.js
└── index.js
```

---

## Component Breakdown

### `Product.js`  
- Represents a single flower product.  
- Displays the flower's image, price, and a quantity input field.  
- Includes an **Add to Cart** button that triggers the `addToCart` function.  

### `Products.js`  
- Displays all available flower products using the `Product` component.  
- Manages the cart state and passes the `addToCart` function to child components.  

### `Cart.js`  
- Displays items added to the cart, including their names, quantities, and total cost.  
- Calculates and displays the **grand total** of all items in the cart.  

### `App.js`  
- Serves as the root component, rendering the `Products` component within a structured layout.  

---

## Workflow

1. **Product Display**  
   - The application fetches flower data and displays it in a grid layout.  

2. **Quantity Selection**  
   - Users specify the desired quantity of a flower.  

3. **Adding to Cart**  
   - Clicking the **Add to Cart** button adds the selected flower and quantity to the cart.  
   - If the flower already exists in the cart, its quantity is updated.  

4. **Viewing the Cart**  
   - The `Cart` section displays all items in the cart along with their quantities, total price for each item, and a grand total.  

---

## Styling

- The application uses a **CSS Grid Layout** for organizing components (`layout.css`).  
- Components are visually styled to ensure a clean and user-friendly interface.  

---

## Output

https://github.com/user-attachments/assets/0362c5a3-cb99-4654-ad13-0ec08cb2c8c7  
  