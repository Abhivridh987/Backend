# Vantique

## Description
Vantique is an online bag commerce backend project built with Node.js and Express.js. It provides a RESTful API for managing users, bags, and administrative functions, including authentication, product management, and more. The application uses MongoDB for data storage and includes features like user authentication (via JWT and bcrypt), session management, and CORS support for cross-origin requests.

## Features
- User authentication and authorization (JWT-based login/signup)
- Bag/product management (CRUD operations for bags)
- Admin panel for managing users and products
- Secure password hashing with bcrypt
- Session management with express-session
- CORS enabled for frontend integration
- MongoDB integration with Mongoose ODM
- Swagger API Documentation included


## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing
- **Swagger API Documentation**: Interactive UI for API Documentation
- **Other Libraries**: body-parser, cookie-parser, cors, dotenv, express-session, lodash

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd Vantique
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables (adjust values as needed):
     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/vantique
     JWT_SECRET=your_jwt_secret_key
     SESSION_SECRET=your_session_secret
     ```

4. Start the MongoDB server (if running locally).

5. Run the application:
   ```
   npm start
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

## Project Structure
```
Vantique/
├── controllers/          # Business logic for auth, bags, and admin
├── models/               # Mongoose schemas for User and Bag
├── routes/               # API route definitions
├── public/               # Static assets (e.g., images)
├── swagger/              # Swagger API Documentation
├── server.js             # Main server file
├── package.json          # Dependencies and scripts
└── readme.md             # This file
```

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## Contact
For questions or support, reach out to [abhivridh2@example.com] or open an issue in the repository. 
