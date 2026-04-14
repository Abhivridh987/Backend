# 🛍️ Vantique - Elegant Bag E-Commerce Backend

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)](https://swagger.io/)

> A sophisticated Node.js backend for an online bag commerce platform, featuring robust authentication, product management, and comprehensive API documentation.

## ✨ Description

Vantique is a full-featured e-commerce backend API designed for a luxury bag marketplace. Built with modern JavaScript technologies, it provides secure user authentication, comprehensive product management, order processing, and administrative controls. The application leverages MongoDB for scalable data storage and includes interactive Swagger documentation for seamless API integration.

## 🚀 Features

- 🔐 **Secure Authentication**: JWT-based login/signup with bcrypt password hashing
- 🛒 **Product Management**: Complete CRUD operations for bag products with advanced search and filtering
- 📦 **Order Processing**: Cart management and order lifecycle handling
- 👨‍💼 **Admin Dashboard**: User and product administration with role-based access
- 📚 **API Documentation**: Interactive Swagger UI for easy API exploration
- 🍪 **Session Management**: Express sessions with cookie-based authentication
- 🔄 **CORS Support**: Cross-origin resource sharing for frontend integration
- ✅ **Data Validation**: Joi schema validation for robust input handling
- 🗄️ **Database Integration**: MongoDB with Mongoose ODM for efficient data modeling

## 🛠️ Tech Stack

### Backend Framework
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework for Node.js

### Database
- **MongoDB** - NoSQL document database for scalable data storage
- **Mongoose** - Elegant MongoDB object modeling for Node.js

### Authentication & Security
- **JWT (JSON Web Tokens)** - Secure token-based authentication
- **bcrypt** - Password hashing for secure credential storage
- **cookie-parser** - Parse HTTP request cookies
- **express-session** - Session middleware for Express

### API & Validation
- **Swagger UI Express** - Interactive API documentation
- **Joi** - Powerful schema description language and data validator
- **body-parser** - Parse incoming request bodies

### Utilities
- **CORS** - Enable Cross-Origin Resource Sharing
- **dotenv** - Load environment variables from .env file
- **Lodash** - Utility library for functional programming

## 📁 Project Structure

```
Vantique/
├── controllers/          # Business logic handlers
│   ├── adminController.js
│   ├── authController.js
│   ├── bagController.js
│   └── orderController.js
├── models/              # MongoDB data models
│   ├── bag.model.js
│   ├── order.model.js
│   └── user.model.js
├── routes/              # API route definitions
│   ├── adminRoutes.js
│   ├── authRoutes.js
│   ├── bagRoutes.js
│   └── orderRoutes.js
├── swagger/             # API documentation
│   ├── swagger.js
│   ├── paths/
│   └── schemas/
├── public/              # Static assets
├── server.js            # Application entry point
├── package.json         # Dependencies and scripts
└── README.md
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Vantique
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Configure the following environment variables:
     ```env
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/vantique
     JWT_SECRET=your_super_secure_jwt_secret_key_here
     SESSION_SECRET=your_session_secret_key_here
     ```

4. **Start MongoDB**
   - Ensure MongoDB is running locally or update `MONGODB_URI` for cloud instance

5. **Run the application**
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000`

## 📖 API Documentation

Once the server is running, access the interactive API documentation at:
```
http://localhost:3000/api-docs
```

The Swagger UI provides:
- Complete endpoint documentation
- Request/response examples
- Interactive API testing
- Schema definitions for all models

## 🔧 Usage

### Authentication Endpoints
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout

### Product Endpoints
- `GET /bags` - Retrieve all bags
- `GET /bags/:id` - Get specific bag
- `POST /bags/:id/cart/add` - Add bag to cart
- `DELETE /bags/:id/cart/delete` - Remove from cart

### Order Endpoints
- `GET /orders/cart` - View cart
- `POST /orders/create` - Create order
- `GET /orders/list` - List user orders

### Admin Endpoints
- `GET /admin/users` - Manage users
- `GET /admin/bags` - Manage products
- `POST /admin/bags` - Create new product

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using modern JavaScript technologies**
   ```
   The server will start on `http://localhost:3000` (or the port specified in `.env`).

## Usage
- **API Endpoints**: The application exposes RESTful endpoints for authentication, bag management, and admin functions. Refer to the routes in the `routes/` folder for details:
  - `/auth` (authRoutes.js): User login, signup, logout
  - `/bags` (bagRoutes.js): Bag CRUD operations
  - `/admin` (adminRoutes.js): Admin-specific actions
- Use tools like Postman or curl to test the APIs.
- Example request:
  ```
  POST /auth/login
  Content-Type: application/json

  {
    "email": "user@example.com",
    "password": "password"
  }
  ```



## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## Contact
For questions or support, reach out to [abhivridh2@example.com] or open an issue in the repository. 
