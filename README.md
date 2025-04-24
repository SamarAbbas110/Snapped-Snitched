![image](https://github.com/user-attachments/assets/a8a8b912-1bbe-4f39-9d12-5e4ec9cc3be7)🛍️ E-Commerce Web Application

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

🗃️ Folder Structure
bash
Copy
Edit
├── client/            # Frontend - React App
├── server/            # Backend - Node/Express App
│   ├── models/        # Mongoose Schemas
│   ├── controllers/   # Business Logic
│   ├── routes/        # API Routes
│   ├── middleware/    # Custom Middleware
├── .env               # Environment Variables
├── README.md


🚀 Getting Started

1. Clone the Repository
   
git clone https://github.com/yourusername/ecommerce-app.git
cd Ecommerce

3. Install Dependencies
   
frontend:
cd frontend
npm run dev

Server:

cd backend
npm run server

admin:

cd admin
npm run dev



3. Setup .env File
   
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
STRIPE_SECRET_KEY=your_stripe_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

📸 Frontend
![Screenshot 2025-04-24 112635](https://github.com/user-attachments/assets/0fdf1c26-9e75-4d88-9c17-301c9ea86915)
![Screenshot 2025-04-24 110649](https://github.com/user-attachments/assets/bab52ae8-50f2-431c-b6ae-cfce5e5bc729)
![Screenshot 2025-04-24 110700](https://github.com/user-attachments/assets/b69109a0-53fc-41d0-b88f-9fef81ec51a4)
![Screenshot 2025-04-24 110715](https://github.com/user-attachments/assets/d82562e6-eb8a-4a96-bcb4-d75040906d81)
![Screenshot 2025-04-24 110725](https://github.com/user-attachments/assets/82c43369-1973-4076-b107-34036a4bf7b8)
![Screenshot 2025-04-24 110732](https://github.com/user-attachments/assets/0ebacc9b-0cc3-4ba2-9887-fa0563924364)
![Screenshot 2025-04-24 112613](https://github.com/user-attachments/assets/45c425da-449a-4873-97cc-c3fa5d949272)
![Screenshot 2025-04-24 112608](https://github.com/user-attachments/assets/c14f309f-c06e-4400-b3c5-b40c264c1ed6)
![Screenshot 2025-04-24 112654](https://github.com/user-attachments/assets/b528d5f5-307f-4fef-9302-003ff7396b20)

Live : https://snapped-snitched--two.vercel.app/





