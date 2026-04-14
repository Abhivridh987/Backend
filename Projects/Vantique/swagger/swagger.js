const bagPaths = require('./paths/bagPaths.js')
const authPaths = require('./paths/authPaths.js')
const adminPaths = require('./paths/adminPaths.js')
const orderPaths = require('./paths/orderPaths.js')

const bagSchema = require('./schemas/bagSchema.js')
const userSchema = require('./schemas/userSchema.js')
const orderSchema = require('./schemas/orderSchema.js')

const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Vantique API",
    version: "1.0.0",
    description: "E-commerce Bag API Documentation",
  },
  servers: [
    {
      url: "http://localhost:8080",
    },
  ],

  paths: {
    ...bagPaths,
    ...authPaths,
    ...adminPaths,
    ...orderPaths
  },

  components: {
    schemas: {
      ...bagSchema,
      ...userSchema,
      ...orderSchema
    },
  },
  tags: [
    {
      name: "Orders",
      description: "Order management endpoints"
    },
    {
      name: "Bag",
      description: "Bag/Product management"
    },
    {
      name: "Auth",
      description: "Authentication endpoints"
    },
    {
      name: "Admin",
      description: "Admin root endpoint"
    },
    {
      name: "Admin - Users",
      description: "Admin user management"
    },
    {
      name: "Admin - Orders",
      description: "Admin order management"
    }
  ],
};

module.exports = swaggerSpec;