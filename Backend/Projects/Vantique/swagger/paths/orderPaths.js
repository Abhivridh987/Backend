module.exports = {
    "/": {
        "get": {
            "tags": [
                "Orders"
            ],
            "summary": "Order API root endpoint",
            "description": "Welcome message for the Order API (Requires authentication token in cookies)",
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Order Root is Successfully Reached",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Order Root is Successfully Reached"
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

    "/cart": {
        "get": {
            "tags": [
                "Orders"
            ],
            "summary": "Get user's cart",
            "description": "Retrieve the current user's cart contents (Requires authentication token in cookies)",
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Cart Obtained Successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Cart Obtained Successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "cart": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "bagId": {
                                                    "type": "string",
                                                    "example": "648878742b18d563a8889b9"
                                                },
                                                "quantity": {
                                                    "type": "number",
                                                    "example": 2
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
                    "description": "Error occurred",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error occured"
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
                                    "detailed_err": {
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

    "/list": {
        "get": {
            "tags": [
                "Orders"
            ],
            "summary": "Get user's orders",
            "description": "Retrieve all orders for the authenticated user (Requires authentication token in cookies)",
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Orders retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "decoded": {
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
                                                "userId": {
                                                    "type": "string"
                                                },
                                                "orders": {
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
                                                },
                                                "status": {
                                                    "type": "string",
                                                    "example": "ORDER_PLACED"
                                                },
                                                "createdAt": {
                                                    "type": "string",
                                                    "format": "date-time"
                                                },
                                                "updatedAt": {
                                                    "type": "string",
                                                    "format": "date-time"
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
                    "description": "Error occurred",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "message": {
                                        "type": "string",
                                        "example": "Error occurred"
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "decoded": {
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

    "/create": {
        "post": {
            "tags": [
                "Orders"
            ],
            "summary": "Create a new order",
            "description": "Create a new order from the user's cart contents (Requires authentication token in cookies)",
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Order placed successfully and DB Updated",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Order placed successfully and DB Updated"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "order": {
                                        "type": "object",
                                        "properties": {
                                            "_id": {
                                                "type": "string"
                                            },
                                            "userId": {
                                                "type": "string"
                                            },
                                            "orders": {
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
                                            },
                                            "status": {
                                                "type": "string",
                                                "example": "ORDER_PLACED"
                                            },
                                            "createdAt": {
                                                "type": "string",
                                                "format": "date-time"
                                            },
                                            "updatedAt": {
                                                "type": "string",
                                                "format": "date-time"
                                            }
                                        }
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
                                                "type": "array",
                                                "example": []
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "403": {
                    "description": "Stock validation failed",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag with id 648878742b18d563a8889b9 in the cart exceeded the current stock"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 403
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "requiredQuantity": {
                                        "type": "number",
                                        "example": 5
                                    },
                                    "availableQuantity": {
                                        "type": "number",
                                        "example": 2
                                    },
                                    "token": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Bag not found in database",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Bag with id 648878742b18d563a8889b9 in the cart not found in DB"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 404
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "token": {
                                        "type": "object"
                                    }
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
                                    "message": {
                                        "type": "string",
                                        "example": "Error occured"
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "detailed_err": {
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

    "/{id}/delete": {
        "delete": {
            "tags": [
                "Orders"
            ],
            "summary": "Cancel an order",
            "description": "Cancel a user's order and restore inventory (Requires authentication token in cookies)",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    },
                    "example": "648878742b18d563a8889b9",
                    "description": "The ID of the order to cancel"
                }
            ],
            "security": [
                {
                    "cookieAuth": []
                }
            ],
            "responses": {
                "200": {
                    "description": "Order cancelled successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Order cancelled successfully"
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 200
                                    },
                                    "decoded": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Invalid order ID",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Invalid order id for deletion"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 400
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "detailed_error": {
                                        "type": "object"
                                    },
                                    "error_message": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                },
                "403": {
                    "description": "Unauthorized or order not found",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Unauthorized or order not found"
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
                    "description": "Order cancellation duration expired",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Order Cancellation Duration Expired"
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 404
                                    }
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
                                    "status": {
                                        "type": "number",
                                        "example": 500
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": false
                                    },
                                    "message": {
                                        "type": "string",
                                        "example": "Error occurred"
                                    },
                                    "error": {
                                        "type": "string"
                                    },
                                    "decoded": {
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