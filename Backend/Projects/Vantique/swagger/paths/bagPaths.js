module.exports = {
    "/bags": {
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
                                            "id": {
                                                "type": "string"
                                            },
                                            "admin": {
                                                "type": "boolean",
                                                "example": false
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

    "/bags/{id}": {
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

    "/bags/{name}/{brand}/{model_no}": {
        "get": {
            "tags": [
                "Bags"
            ],
            "summary": "Get bag by name, brand and model number",
            "description": "Retrieve a specific bag by its name, brand, and model number (Requires authentication token in cookies)",
            "parameters": [
                {
                    "name": "name",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "Classic Leather Bag",
                    "description": "The name of the bag"
                },
                {
                    "name": "brand",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "BrandX",
                    "description": "The brand of the bag"
                },
                {
                    "name": "model_no",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "CLB-001",
                    "description": "The model number of the bag"
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
                    "description": "Bag not found with the provided name, brand and model number",
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

    "/bags/search": {
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
                    "description": "Bag not found with the provided name, brand and model number",
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

    "/bags/search/filter": {
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
    }
}
