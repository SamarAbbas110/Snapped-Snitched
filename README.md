🛍️ E-Commerce Web Application

A dynamic, full-stack E-Commerce Web Application built with React.js and Node.js, offering a seamless shopping experience with modern UI/UX design. This application supports user authentication, product management, cart and order functionality, and multiple payment gateways including Stripe, Razorpay, and Cash on Delivery (COD).

🔧 Tech Stack

Frontend:
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
Depencies - axios , react toastify , react-router , Tailwind css , autoprefixer

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

Backend:
cd backend
npm run server

Admin:
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





