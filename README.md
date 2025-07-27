🍕 Pizza Palace - Full Stack Pizza Delivery App

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" alt="Stripe" />
</div>
<div align="center">
  <h3>🚀 A modern, full-featured pizza delivery application built with the MERN stack</h3>
  <p>
    <a href="#demo">View Demo</a> •
    <a href="#installation">Installation</a> •
    <a href="#features">Features</a> •
    <a href="#api">API Docs</a>
  </p>
</div>

📖 Table of Contents

Overview
Features
Tech Stack
Demo
Installation
Environment Variables
API Documentation
Project Structure
Screenshots
Contributing
License
Contact

🎯 Overview
Pizza Palace is a comprehensive full-stack pizza delivery application that provides a seamless experience for customers to browse menus, customize pizzas, place orders, and track deliveries in real-time. The admin panel allows restaurant owners to manage orders, update menus, and track business analytics.
🌟 Key Highlights

Real-time Order Tracking - Live updates on order status
Secure Payment Processing - Integrated Stripe payment gateway
Admin Dashboard - Comprehensive order and inventory management
Responsive Design - Optimized for all devices
User Authentication - JWT-based secure authentication

✨ Features
🛒 Customer Features

Menu Browsing - Browse pizza categories with detailed descriptions
Pizza Customization - Choose size, crust, toppings, and extras
Shopping Cart - Add/remove items with quantity management
User Authentication - Register, login, and profile management
Order Placement - Seamless checkout process
Payment Integration - Secure payments via Stripe
Order History - View past orders and reorder favorites
Real-time Tracking - Live order status updates

👨‍💼 Admin Features

Dashboard Analytics - Sales reports and key metrics
Order Management - View, update, and process orders
Menu Management - Add, edit, and remove menu items
User Management - View and manage customer accounts
Inventory Tracking - Monitor stock levels
Revenue Analytics - Detailed financial reports

🔧 Technical Features

Responsive Design - Mobile-first approach
RESTful API - Well-structured backend endpoints
Data Validation - Input validation on both client and server
Error Handling - Comprehensive error management
Security - JWT authentication, password hashing, input sanitization
Performance - Optimized queries and image loading

🛠️ Tech Stack
Frontend

React.js - User interface library
React Router - Client-side routing
Redux Toolkit - State management
Tailwind CSS - Utility-first CSS framework
Axios - HTTP client for API calls
React Hook Form - Form handling and validation

Backend

Node.js - JavaScript runtime environment
Express.js - Web application framework
MongoDB - NoSQL database
Mongoose - MongoDB object modeling
JWT - JSON Web Tokens for authentication
bcryptjs - Password hashing
Multer - File upload handling

Payment & Services

Stripe - Payment processing
Cloudinary - Image storage and optimization
Nodemailer - Email service
Socket.io - Real-time communication

Development Tools

Concurrently - Run multiple commands simultaneously
Nodemon - Development server auto-restart
ESLint - Code linting
Prettier - Code formatting

🎥 Demo
Live Demo
🔗 View Live Application
Demo Credentials
Customer Account:
Email: customer@demo.com
Password: demo123

Admin Account:
Email: admin@demo.com
Password: admin123
🚀 Installation
Prerequisites

Node.js (v14 or higher)
MongoDB (local or Atlas)
Git

Clone the Repository
bashgit clone https://github.com/yourusername/pizza-delivery-app.git
cd pizza-delivery-app
Backend Setup
bash# Navigate to backend directory
cd backend

# Install dependencies

npm install

# Create .env file (see Environment Variables section)

touch .env

# Start development server

npm run dev
Frontend Setup
bash# Navigate to frontend directory (from root)
cd frontend

# Install dependencies

npm install

# Start development server

npm start
Run Both Servers Concurrently
bash# From root directory
npm install
npm run dev
🔐 Environment Variables
Create a .env file in the backend directory:
env# Server Configuration
PORT=5000
NODE_ENV=development

# Database

MONGODB_URI=mongodb://localhost:27017/pizzadelivery

# or for MongoDB Atlas:

# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pizzadelivery

# JWT Secret

JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d

# Stripe Configuration

STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Cloudinary Configuration (for image uploads)

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Configuration (for order confirmations)

EMAIL_FROM=noreply@pizzapalace.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Frontend URL (for CORS)

CLIENT_URL=http://localhost:3000
Create a .env file in the frontend directory:
envREACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
📚 API Documentation
Base URL
http://localhost:5000/api
Authentication Endpoints
httpPOST /api/auth/register # Register new user
POST /api/auth/login # User login
GET /api/auth/profile # Get user profile
PUT /api/auth/profile # Update user profile
Menu Endpoints
httpGET /api/menu # Get all menu items
GET /api/menu/:id # Get specific menu item
POST /api/menu # Create menu item (Admin)
PUT /api/menu/:id # Update menu item (Admin)
DELETE /api/menu/:id # Delete menu item (Admin)
Order Endpoints
httpGET /api/orders # Get user orders
POST /api/orders # Create new order
GET /api/orders/:id # Get specific order
PUT /api/orders/:id # Update order status (Admin)
Payment Endpoints
httpPOST /api/payment/create-intent # Create Stripe payment intent
POST /api/payment/confirm # Confirm payment
For detailed API documentation with request/response examples, visit our API Documentation.
📁 Project Structure
pizza-delivery-app/
├── backend/
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── menuController.js
│ │ ├── orderController.js
│ │ └── paymentController.js
│ ├── middleware/
│ │ ├── auth.js
│ │ ├── admin.js
│ │ └── errorHandler.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Menu.js
│ │ └── Order.js
│ ├── routes/
│ │ ├── auth.js
│ │ ├── menu.js
│ │ ├── orders.js
│ │ └── payment.js
│ ├── utils/
│ │ ├── database.js
│ │ └── helpers.js
│ ├── .env
│ ├── package.json
│ └── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── common/
│ │ │ ├── auth/
│ │ │ ├── menu/
│ │ │ ├── cart/
│ │ │ └── admin/
│ │ ├── pages/
│ │ │ ├── Home.js
│ │ │ ├── Menu.js
│ │ │ ├── Cart.js
│ │ │ ├── Checkout.js
│ │ │ └── Profile.js
│ │ ├── redux/
│ │ │ ├── slices/
│ │ │ └── store.js
│ │ ├── services/
│ │ │ └── api.js
│ │ ├── utils/
│ │ ├── App.js
│ │ └── index.js
│ ├── .env
│ └── package.json
├── README.md
└── package.json
📱 Screenshots
Customer Interface

<div align="center">
  <img src="screenshots/homepage.png" alt="Homepage" width="45%" />
  <img src="screenshots/menu.png" alt="Menu Page" width="45%" />
</div>
<div align="center">
  <img src="screenshots/cart.png" alt="Shopping Cart" width="45%" />
  <img src="screenshots/checkout.png" alt="Checkout" width="45%" />
</div>
Admin Dashboard
<div align="center">
  <img src="screenshots/admin-dashboard.png" alt="Admin Dashboard" width="45%" />
  <img src="screenshots/order-management.png" alt="Order Management" width="45%" />
</div>
🤝 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
How to Contribute

Fork the Project
bashgit clone https://github.com/yourusername/pizza-delivery-app.git

Create your Feature Branch
bashgit checkout -b feature/AmazingFeature

Commit your Changes
bashgit commit -m 'Add some AmazingFeature'

Push to the Branch
bashgit push origin feature/AmazingFeature

Open a Pull Request

Development Guidelines

Follow the existing code style and conventions
Write meaningful commit messages
Add tests for new features
Update documentation as needed
Ensure all tests pass before submitting PR

Issues and Feature Requests

🐛 Bug Reports: Use the bug report template
💡 Feature Requests: Use the feature request template
📚 Documentation: Help improve our docs

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
📞 Contact
Your Name - @yourusername - your.email@example.com
Project Link: https://github.com/yourusername/pizza-delivery-app
Portfolio: https://yourportfolio.com

<div align="center">
  <p>Made with ❤️ and lots of 🍕</p>
  <p>
    <a href="https://github.com/yourusername/pizza-delivery-app/stargazers">⭐ Star this repo</a> •
    <a href="https://github.com/yourusername/pizza-delivery-app/fork">🍴 Fork it</a> •
    <a href="https://github.com/yourusername/pizza-delivery-app/issues">🐛 Report Bug</a>
  </p>
</div>
