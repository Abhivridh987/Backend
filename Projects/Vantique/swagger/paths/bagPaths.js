module.exports = {
    "home/": {
        "get": {
            "tags": [
                "Bags"
            ],
            "summary": "Bag API root endpoint",
            "description": "Welcome message for the Bag API (Requires authentication token in cookies)",
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Bag Root is Successfully Reached",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag Root is Successfully Reached"
                                    },
                                    "token": {
                                        "type": "object",
                                        "properties": {
                                            "email": {
                                                "type": "string"
                                            },
                                            "username": {
                                                "type": "string"
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "admin": {
                                                "type": "boolean"
                                            },
                                            "cart": {
                                                "type": "array"
                                            }
                                        }
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

    "home/bags": {
        "get": {
            "tags": [
                "Bags"
            ],
            "summary": "Get all bags",
            "description": "Retrieve all bags from the database (Requires authentication token in cookies)",
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
                                    "token": {
                                        "type": "object",
                                        "properties": {
                                            "email": {
                                                "type": "string",
                                                "example": "user@example.com"
                                            },
                                            "username": {
                                                "type": "string",
                                                "example": "username"
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "admin": {
                                                "type": "boolean",
                                                "example": false
                                            },
                                            "cart": {
                                                "type": "array"
                                            }
                                        }
                                    },
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
                                    "data": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "_id": {
                                                    "type": "string"
                                                },
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
                                                "price": {
                                                    "type": "number",
                                                    "example": 5999
                                                },
                                                "category": {
                                                    "type": "string",
                                                    "example": "leather"
                                                },
                                                "quantity": {
                                                    "type": "number",
                                                    "example": 10
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
                                                    "type": "string"
                                                },
                                                "bestSeller": {
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
        }
    },

    "home/bags/{id}": {
        "get": {
            "tags": [
                "Bags"
            ],
            "summary": "Get bag by ID",
            "description": "Retrieve a specific bag by its ID (Requires authentication token in cookies)",
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
                                        "type": "object",
                                        "properties": {
                                            "_id": {
                                                "type": "string"
                                            },
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
                                            "price": {
                                                "type": "number",
                                                "example": 5999
                                            },
                                            "category": {
                                                "type": "string",
                                                "example": "leather"
                                            },
                                            "quantity": {
                                                "type": "number",
                                                "example": 10
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
                                                "type": "string"
                                            },
                                            "bestSeller": {
                                                "type": "boolean",
                                                "example": true
                                            }
                                        }
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
        }
    },

    "home/bags/search": {
        "get": {
            "tags": [
                "Bags"
            ],
            "summary": "Search bags",
            "description": "Search for bags by query string (name, brand, or category) (Requires authentication token in cookies)",
            "parameters": [
                {
                    "name": "query",
                    "in": "query",
                    "required": false,
                    "schema": {
                        "type": "string"
                    },
                    "example": "leather",
                    "description": "Search query to filter bags by name, brand, or category"
                }
            ],
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
                "404": {
                    "description": "Bag not found with the provided search criteria",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag not found with the provided name, brand and model number"
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
        }
    },

    "home/bags/search/filter": {
        "get": {
            "tags": [
                "Bags"
            ],
            "summary": "Filter bags with advanced criteria",
            "description": "Filter bags by multiple criteria including price range, rating, categories, best sellers, and discount (Requires authentication token in cookies)",
            "parameters": [
                {
                    "name": "query",
                    "in": "query",
                    "required": false,
                    "schema": {
                        "type": "string"
                    },
                    "example": "leather",
                    "description": "Search query to filter by name, brand, or category"
                },
                {
                    "name": "categories",
                    "in": "query",
                    "required": false,
                    "schema": {
                        "type": "string"
                    },
                    "example": "leather,canvas",
                    "description": "Comma-separated list of categories to filter by"
                },
                {
                    "name": "price_min",
                    "in": "query",
                    "required": false,
                    "schema": {
                        "type": "number"
                    },
                    "example": 0,
                    "description": "Minimum price filter"
                },
                {
                    "name": "price_max",
                    "in": "query",
                    "required": false,
                    "schema": {
                        "type": "number"
                    },
                    "example": 10000,
                    "description": "Maximum price filter"
                },
                {
                    "name": "rating_min",
                    "in": "query",
                    "required": false,
                    "schema": {
                        "type": "number"
                    },
                    "example": 0,
                    "description": "Minimum rating filter"
                },
                {
                    "name": "bestSeller",
                    "in": "query",
                    "required": false,
                    "schema": {
                        "type": "boolean"
                    },
                    "example": true,
                    "description": "Filter only best sellers"
                },
                {
                    "name": "discount",
                    "in": "query",
                    "required": false,
                    "schema": {
                        "type": "number"
                    },
                    "example": 0,
                    "description": "Minimum discount percentage filter"
                }
            ],
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
                "404": {
                    "description": "Bags not found with specifications",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bags not found with specfications"
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
                                    },
                                    "detailed_error": {
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

    "home/bags/{id}/cart/add": {
        "put": {
            "tags": [
                "Cart"
            ],
            "summary": "Add bag to cart",
            "description": "Add a bag to the user's cart (Requires authentication token in cookies)",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "648878742b18d563a8889b9",
                    "description": "The ID of the bag to add to cart"
                },
                {
                    "name": "quantity",
                    "in": "query",
                    "required": false,
                    "schema": {
                        "type": "number"
                    },
                    "example": 1,
                    "description": "Quantity of the bag to add (defaults to 1)"
                }
            ],
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Item added to cart",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Item added to cart"
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "data": {
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
                                            },
                                            "cart": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "bagId": {
                                                            "type": "string"
                                                        },
                                                        "quantity": {
                                                            "type": "number"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Quantity exceeds stock",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Quantity exceeds stock"
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
                "404": {
                    "description": "Bag or user not found",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag not found"
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 404
                                    },
                                    "decoded": {
                                        "type": "object"
                                    }
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
                                    "error": {
                                        "type": "string"
                                    },
                                    "message": {
                                        "type": "string",
                                        "example": "Server error"
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    "home/bags/{id}/cart/delete": {
        "put": {
            "tags": [
                "Cart"
            ],
            "summary": "Remove bag from cart",
            "description": "Remove a bag from the user's cart or reduce its quantity (Requires authentication token in cookies)",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "648878742b18d563a8889b9",
                    "description": "The ID of the bag to remove from cart"
                },
                {
                    "name": "quantity",
                    "in": "query",
                    "required": false,
                    "schema": {
                        "type": "number"
                    },
                    "example": 1,
                    "description": "Quantity of the bag to remove (defaults to 1)"
                }
            ],
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Cart updated successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Cart updated successfully"
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "data": {
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
                                            },
                                            "cart": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "bagId": {
                                                            "type": "string"
                                                        },
                                                        "quantity": {
                                                            "type": "number"
                                                        }
                                                    }
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
                    "description": "User not found or bag doesn't exist in cart",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag doesn't exist in cart"
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
                    "description": "Server error",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "error": {
                                        "type": "string"
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
