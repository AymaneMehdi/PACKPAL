# PACKPAL - Administration System

<img src="./PACKPAL.png" alt="PACKPAL" /> 

---

## Overview
PACKPAL - Administration System is designed for organizations to manage products, categories, customers, orders, and other admin users efficiently. It provides a secure, modular, and scalable backend to support administrative operations.

## Features
- **Authentication & Authorization:** Secure login and role-based access control.
- **Product Management:** CRUD operations for products.
- **Category Management:** Organize products into categories.
- **Customer Management:** View and manage customer details.
- **Order Management:** Track and manage customer orders.
- **Admin & User Management:** Manage other admins and users.
- **Statistics:** Generate reports and statistics for better insights.

---

# PACKPAL Back-End

It is built with **Node.js**, **Express.js**, and **MongoDB**, providing authentication, mailing, data tracking, and business logic management.

---

## Features

- User authentication with JWT & bcrypt  
- Product, Order, Customer, and Category management APIs  
- User management APIs  
- Statistics tracking APIs  
- Middleware for authentication & error handling  
- CORS support  
- MongoDB & Mongoose integration  

---

## Project Structure

```
PACKPAL-Back-End/
├── Config/                 # Configuration (DB connection, etc.)
│   └── db.js
│
├── controllers/            # Business logic
│   ├── authController.js
│   ├── categoriesController.js
│   ├── customersController.js
│   ├── loginController.js
│   ├── ordersController.js
│   ├── productsController.js
│   ├── statisticsController.js
│   └── usersController.js
│
├── middleware/             # Middleware (auth, error handling, etc.)
│   ├── auth.js
│   └── errorHandler.js
│
├── models/                 # Mongoose models
│   ├── category.js
│   ├── customer.js
│   ├── order.js
│   ├── product.js
│   └── user.js
│
├── routes/                 # API routes
│   ├── categoryRouter.js
│   ├── customerRouter.js
│   ├── loginRouter.js
│   ├── orderRouter.js
│   ├── productRouter.js
│   ├── statisticRouter.js
│   └── userRouter.js
│
├── app.js                  # Express app configuration
├── package.json            # Dependencies & scripts
├── vercel.json             # Vercel deployment config
└── .gitignore
```

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AymaneMehdi/PACKPAL.git
   cd PACKPAL
   cd PACKPAL-Back-End
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URL=your_mongodb_connection_string
   ```

---

## Running the Project

### Development
```bash
npm start
```

The Back-End will run at [http://localhost:5000](http://localhost:5000).

---

## Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT Authentication**  
- **Bcrypt.js** (password hashing)  
- **Vercel** (for deployment)  

---

# PACKPAL Back-Office

It is built with **React.js**, **Redux**, and **TailwindCSS**, and integrates with the PACKPAL Back-End API.  

---

## Features

- Authentication & Protected Routes (React Router DOM)  
- Product, Category, Customer & Order Management  
- User & Partner Management Dashboard  
- Statistics & Charts with **Recharts**  
- Modern UI with **TailwindCSS** & **Ant Design**  
- Notifications via **react-hot-toast**  
- Redux state management with Thunk middleware  

---

## Project Structure

```
PACKPAL-Back-Office/
├── public/              
│   └── index.html
│
├── src/                 
│   ├── API/             # API service files
│   │   ├── Categories.js
│   │   ├── Customers.js
│   │   ├── orders.js
│   │   ├── Products.js
│   │   └── Users.js
│   │
│   ├── assets/          # Images & static assets
│   │   ├── logo 1.png
│   │   └── logo 2.png
│   │
│   ├── components/      # Reusable UI components
│   │   ├── card.jsx
│   │   └── Doughnut.jsx
│   │
│   ├── pages/           # Application pages
│   │   ├── Category.jsx
│   │   ├── Customer.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Order.jsx
│   │   ├── Product.jsx
│   │   └── User.jsx
│   │
│   ├── Redux/           # Redux state management
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── Types/
│   │   └── store.js
│   │
│   ├── App.js           # Main app component
│   ├── index.js         # Entry point
│   ├── index.css        # Global styles
│   └── PrivateRoute.js  # Protected routes
│
├── tailwind.config.js   # TailwindCSS config
├── package.json         # Dependencies & scripts
└──  .gitignore

```

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AymaneMehdi/PACKPAL.git
   cd PACKPAL
   cd PACKPAL-Back-Office
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## Running the Project

### Development
```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build for Production
```bash
npm run build
```
Builds the app for production into the `build/` folder.

---

## Tech Stack

- **React.js 18**  
- **Redux + Redux Thunk**  
- **React Router DOM (v6)**  
- **TailwindCSS 3**  
- **Ant Design (UI Components)**  
- **Recharts (Charts & Stats)**  
- **Axios (API calls)**  
- **react-hot-toast (Notifications)**  

---

## License

This project is licensed under the [MIT License](LICENSE).  

---
Copyright© Aymane Mehdi
