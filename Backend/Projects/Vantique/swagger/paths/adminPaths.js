module.exports = {
    "/admin": {
        "get": {
            "tags": [
                "Admin"
            ],
            "summary": "Admin root endpoint",
            "description": "Welcome message for the Admin API (Requires authentication token in cookies)",
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Welcome to the Admin Root",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Welcome to the Admin Root"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    "/admin/users": {
        "get": {
            "tags": [
                "Admin - Users"
            ],
            "summary": "Get all users",
            "description": "Retrieve all users from the database (Requires admin authentication token in cookies)",
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Users retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Users retrieved successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "decodedToken": {
                                        "type": "object",
                                        "properties": {
                                            "email": {
                                                "type": "string"
                                            },
                                            "username": {
                                                "type": "string"
                                            },
                                            "id": {
                                                "type": "string"
                                            },
                                            "admin": {
                                                "type": "boolean"
                                            }
                                        }
                                    },
                                    "data": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "_id": {
                                                    "type": "string"
                                                },
                                                "username": {
                                                    "type": "string"
                                                },
                                                "email": {
                                                    "type": "string"
                                                },
                                                "admin": {
                                                    "type": "boolean"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "No users found in the database",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "No users found in the database"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 404
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error retrieving users",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error retrieving users"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    "/admin/users/{id}": {
        "get": {
            "tags": [
                "Admin - Users"
            ],
            "summary": "Get user by ID",
            "description": "Retrieve a specific user by their ID (Requires admin authentication token in cookies)",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "648878742b18d563a8889b9",
                    "description": "The ID of the user to retrieve"
                }
            ],
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "User retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "User retrieved successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    },
                                    "data": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "User not found with the provided ID",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "User not found with the provided ID"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 404
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error retrieving user",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error retrieving user"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "delete": {
            "tags": [
                "Admin - Users"
            ],
            "summary": "Delete user by ID",
            "description": "Delete a specific user by their ID (Requires admin authentication token in cookies)",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "648878742b18d563a8889b9",
                    "description": "The ID of the user to delete"
                }
            ],
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "User deleted successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "User deleted successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    },
                                    "data": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "User not found with the provided ID",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "User not found with the provided ID"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 404
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error deleting user",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error deleting user"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "put": {
            "tags": [
                "Admin - Users"
            ],
            "summary": "Update user role by ID",
            "description": "Change a user's admin role by their ID (Requires admin authentication token in cookies)",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "648878742b18d563a8889b9",
                    "description": "The ID of the user to update"
                }
            ],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "admin": {
                                    "type": "boolean",
                                    "example": true,
                                    "description": "Set user as admin or regular user"
                                }
                            },
                            "required": ["admin"]
                        }
                    }
                }
            },
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "User role updated successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "User role updated successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    },
                                    "data": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Admin field is required in the request body",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Admin field is required in the request body"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 400
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "User not found with the provided ID",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "User not found with the provided ID"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 404
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error updating user role",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error updating user role"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    "/admin/bags": {
        "get": {
            "tags": [
                "Admin - Bags"
            ],
            "summary": "Get all bags",
            "description": "Retrieve all bags from the database (Requires admin authentication token in cookies)",
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Bags retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bags retrieved successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "token": {
                                        "type": "object"
                                    },
                                    "data": {
                                        "type": "array",
                                        "items": {
                                            "type": "object"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error retrieving bags",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error retrieving bags"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "error": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "post": {
            "tags": [
                "Admin - Bags"
            ],
            "summary": "Create a new bag",
            "description": "Create a new bag product (Requires admin authentication token in cookies)",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "example": "Classic Leather Bag"
                                },
                                "brand": {
                                    "type": "string",
                                    "example": "BrandX"
                                },
                                "model_no": {
                                    "type": "string",
                                    "example": "CLB-001"
                                },
                                "description": {
                                    "type": "string",
                                    "example": "A classic leather bag with premium quality"
                                },
                                "category": {
                                    "type": "string",
                                    "example": "leather"
                                },
                                "price": {
                                    "type": "number",
                                    "example": 5999
                                },
                                "quantity": {
                                    "type": "number",
                                    "example": 50
                                },
                                "discount": {
                                    "type": "number",
                                    "example": 10
                                },
                                "rating": {
                                    "type": "number",
                                    "example": 4.5
                                },
                                "image_url": {
                                    "type": "string",
                                    "example": "https://example.com/image.jpg"
                                },
                                "bestSeller": {
                                    "type": "boolean",
                                    "example": true
                                }
                            },
                            "required": ["name", "brand", "model_no", "description", "category", "price", "quantity"]
                        }
                    }
                }
            },
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "201": {
                    "description": "Bag created successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag created successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 201
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    },
                                    "data": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Missing required fields to create a bag",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Missing required fields to create a bag"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 400
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error saving bag to the database",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error saving bag to the database"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    "/admin/bags/{id}": {
        "get": {
            "tags": [
                "Admin - Bags"
            ],
            "summary": "Get bag by ID",
            "description": "Retrieve a specific bag by its ID (Requires admin authentication token in cookies)",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "648878742b18d563a8889b9",
                    "description": "The ID of the bag to retrieve"
                }
            ],
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Bag retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag retrieved Successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "token": {
                                        "type": "object"
                                    },
                                    "data": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Bag not found with the provided ID",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag not found with the provided ID"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 404
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error retrieving bag",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error retrieving bag"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "error": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "put": {
            "tags": [
                "Admin - Bags"
            ],
            "summary": "Update bag by ID",
            "description": "Update a specific bag by its ID (Requires admin authentication token in cookies)",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "648878742b18d563a8889b9",
                    "description": "The ID of the bag to update"
                }
            ],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "brand": {
                                    "type": "string"
                                },
                                "model_no": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "category": {
                                    "type": "string"
                                },
                                "price": {
                                    "type": "number"
                                },
                                "quantity": {
                                    "type": "number"
                                },
                                "discount": {
                                    "type": "number"
                                },
                                "rating": {
                                    "type": "number"
                                },
                                "image_url": {
                                    "type": "string"
                                },
                                "bestSeller": {
                                    "type": "boolean"
                                }
                            }
                        }
                    }
                }
            },
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Bag updated successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag updated successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    },
                                    "data": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Bag not found with the provided ID",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag not found with the provided ID"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 404
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error updating bag",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error updating bag"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "delete": {
            "tags": [
                "Admin - Bags"
            ],
            "summary": "Delete bag by ID",
            "description": "Delete a specific bag by its ID (Requires admin authentication token in cookies)",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "648878742b18d563a8889b9",
                    "description": "The ID of the bag to delete"
                }
            ],
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Bag deleted successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag deleted successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    },
                                    "data": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Bag not found with the provided ID",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag not found with the provided ID"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 404
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error deleting bag",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error deleting bag"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "decodedToken": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
  "/admin/orders/list": {
    "get": {
      "tags": ["Admin - Orders"],
      "summary": "Get all orders",
      "description": "Retrieve all orders from the database (Admin only)",
      "security": [
        {
          "cookieAuth": []
        }
      ],
      "responses": {
        "200": {
          "description": "Retrieved all orders",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": { "type": "number", "example": 200 },
                  "ok": { "type": "boolean", "example": true },
                  "message": { "type": "string", "example": "Retrieved all orders" },
                  "data": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "_id": { "type": "string" },
                        "userId": { "type": "string" },
                        "orders": { "type": "array", "items": { "type": "object" } },
                        "status": { "type": "string", "example": "pending" }
                      }
                    }
                  },
                  "token": { "type": "object" }
                }
              }
            }
          }
        },
        "500": {
          "description": "Error occurred",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": { "type": "number", "example": 500 },
                  "ok": { "type": "boolean", "example": false },
                  "message": { "type": "string", "example": "Error occured" },
                  "error": { "type": "string" }
                }
              }
            }
          }
        }
      }
    }
  },

  "/admin/orders/list/{id}": {
    "get": {
      "tags": ["Admin - Orders"],
      "summary": "Get orders by user ID",
      "description": "Retrieve all orders of a specific user (Admin only)",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "required": true,
          "schema": { "type": "string" },
          "example": "64f1a2b3c4d5e6f7890abc12",
          "description": "User ID"
        }
      ],
      "security": [
        {
          "cookieAuth": []
        }
      ],
      "responses": {
        "200": {
          "description": "Retrieved user orders",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": { "type": "number", "example": 200 },
                  "ok": { "type": "boolean", "example": true },
                  "message": { "type": "string", "example": "Retrieved all orders" },
                  "data": {
                    "type": "array",
                    "items": { "type": "object" }
                  },
                  "token": { "type": "object" }
                }
              }
            }
          }
        },
        "400": {
          "description": "Invalid user ID",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "message": { "type": "string", "example": "Invalid user id" },
                  "ok": { "type": "boolean", "example": false }
                }
              }
            }
          }
        },
        "500": {
          "description": "Error occurred",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": { "type": "number", "example": 500 },
                  "ok": { "type": "boolean", "example": false },
                  "message": { "type": "string", "example": "Error occured" },
                  "error": { "type": "string" }
                }
              }
            }
          }
        }
      }
    }
  },

  "/admin/orders/{id}/status": {
    "put": {
      "tags": ["Admin - Orders"],
      "summary": "Change order status",
      "description": "Update the status of an order (Admin only)",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "required": true,
          "schema": { "type": "string" },
          "example": "64f1a2b3c4d5e6f7890abc12",
          "description": "Order ID"
        }
      ],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "status": {
                  "type": "string",
                  "example": "shipped"
                }
              },
              "required": ["status"]
            }
          }
        }
      },
      "security": [
        {
          "cookieAuth": []
        }
      ],
      "responses": {
        "200": {
          "description": "Order status updated successfully",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": { "type": "number", "example": 200 },
                  "ok": { "type": "boolean", "example": true },
                  "message": { "type": "string", "example": "Order status updated successfully" },
                  "data": { "type": "object" }
                }
              }
            }
          }
        },
        "400": {
          "description": "Invalid schema or status",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "message": { "type": "string", "example": "Invalid schema or status" },
                  "ok": { "type": "boolean", "example": false }
                }
              }
            }
          }
        },
        "403": {
          "description": "Unauthorized access",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "message": { "type": "string", "example": "Admin access required" },
                  "ok": { "type": "boolean", "example": false }
                }
              }
            }
          }
        },
        "404": {
          "description": "Order not found",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "message": { "type": "string", "example": "Order not found" },
                  "ok": { "type": "boolean", "example": false }
                }
              }
            }
          }
        },
        "500": {
          "description": "Server error",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": { "type": "number", "example": 500 },
                  "ok": { "type": "boolean", "example": false },
                  "message": { "type": "string", "example": "Error occured" },
                  "error": { "type": "string" }
                }
              }
            }
          }
        }
      }
    }
  }
}
