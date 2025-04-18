E-Commerce Web Application

Overview

This e-commerce web application is a dynamic and interactive platform that allows users to browse products, add items to the cart, and place orders efficiently. It provides a seamless shopping experience with modern design and smooth navigation.

Tech Stack

React.js

Tailwind CSS

React Toaster

Features

1. Navigation

A responsive navigation bar with links to Home, Collections, About, Contact Us.

Search button and login section with profile, orders, logout options.

Cart icon to view selected items.

2. UI Components

Navbar: Includes Home, Collections, About, Contact Us.

SlideBar: For smooth navigation for Mobile View.

Hero Page: Stylish introduction with Poppins custom font.

Footer: Includes links to return policy, exchange policy, and customer support.

Subscribe Input: Allows users to subscribe to newsletters.

3. Product Management

Collections Component:

Filter and sort options (Relevance, Low to High, High to Low).

Dynamic product listing and search functionality.

Search bar visible only on the Collections page.

Product Page:

Displays product details (name, price, image, ID).

Features like sizes, add-to-cart button, and related products.

Real-time product count updates in the cart.

4. Cart Management

Display cart items including product name, size, price, quantity, and delete option.

Calculate the total amount dynamically.

Navigate between product and cart pages using useNavigate() hook.

5. Order Placement

Checkout Page:

User form for order details.

Payment options with a submit button.

Order Page:

Displays purchased products with details (image, price, quantity, size).

Status message and track order button.

Login and Signup Page

BACKEND PART

Dependencies : cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt
Thunder Client for Checking API'S in VS code

Implemented Cloudinary , Connected MongoDB
Created UserSchema and Product Schema

Routes 
    - Product Routes eg - Addproducts , Removeproducts , lisitngProducts , singleProduct
    - User Routes - eg - login , register , admin

Middlewares 
    - Created 2 Middlewares
    1 - Multer middleware for Addproduct Route allow to upload Images 
    2 - adminAuth Middleware , this middle is basically used for add and remove product with the admin credentials only

Controllers 
    - Creatd ProductControllers written the function logic for all 4 routs in Product Route
    - Added RegisterUser , loginUser , Admin logic to handle to Authentication Operations

Admin 
Depencies - axios , react toastify , react-router , 
Tailwind css , autoprefixer

