const bagPaths = require('./paths/bagPaths.js')
const authPaths = require('./paths/authPaths.js')
const adminPaths = require('./paths/adminPaths.js')

const bagSchema = require('./schemas/bagSchema.js')
const userSchema = require('./schemas/userSchema.js')

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
    ...adminPaths
  },

  components: {
    schemas: {
      ...bagSchema,
      ...userSchema
    },
  },
};

module.exports = swaggerSpec;