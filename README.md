🛍️ E-Commerce Web Application
A dynamic, full-stack E-Commerce Web Application built with React.js and Node.js, offering a seamless shopping experience with modern UI/UX design. This application supports user authentication, product management, cart and order functionality, and multiple payment gateways including Stripe, Razorpay, and Cash on Delivery (COD).

🔧 Tech Stack
Frontend:

React.js

Tailwind CSS

React Toastify

React Router

Backend:

Node.js

Express.js

MongoDB with Mongoose

Cloudinary (Image storage)

Stripe & Razorpay (Payment Gateway)

Multer (Image Upload)

JWT (Authentication)

Dev Tools:

Thunder Client (API Testing)

Nodemon

Dotenv

✨ Features
🌐 Navigation
Responsive navigation bar with links: Home, Collections, About, Contact Us

Search bar (visible on Collections page only)

Login/Profile menu (View orders, Logout)

Cart icon for quick cart access

💎 UI Components
Navbar: Accessible site-wide navigation

Sidebar: Optimized for mobile view

Hero Page: Stylish landing section with Poppins font

Footer: Simplified and clean

Removed: Newsletter subscription and policy links

🛒 Product Management
Collections Page:

Dynamic product listing

Filter & sort (Relevance, Price: Low to High/High to Low)

Search functionality

Product Page:

Product details (name, price, image, ID)

Sizes, add-to-cart functionality

Related products section

Cart Management:

Item list (name, size, quantity, price)

Quantity update and delete item

Real-time cart total calculation

✅ Order Placement
Checkout Page:

User details form

Payment options (Stripe, Razorpay, COD)

Order Summary:

Purchased items, price, size, status

Track order functionality

Dynamic order status updates

🔐 Authentication
User Login and Signup pages

JWT-based authentication

Admin-protected routes and actions

🛠️ Backend Functionality
📦 Dependencies:
bash
Copy
Edit
cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt
🗂️ Schemas
User Schema: Authentication & roles

Product Schema: Includes name, description, price, category, sizes, images

🛣️ Routes
Product Routes: addProduct, removeProduct, listProducts, getProduct

User Routes: login, register, admin login

🧩 Middleware
Multer Middleware – Handles image upload via form data

adminAuth Middleware – Protects admin actions like adding/removing products

🧠 Controllers
Product Controller: CRUD operations for products

User Controller: Register, Login, Admin logic

🧑‍💻 Admin Panel
Dependencies:

React Toastify

Axios

Tailwind CSS

Admin Features:
Admin Login with protected access

Add Product: Upload image, enter name, description, categories, price, size, and bestseller status

List Products: View all added products with options to edit/delete

Order Management:

View customer name, address, product list, order status, payment method (Stripe, Razorpay, COD)

Track and update delivery status (e.g., Order Placed → Packed → Shipped → Delivered)

🧪 Testing
All APIs tested using Thunder Client inside VS Code
