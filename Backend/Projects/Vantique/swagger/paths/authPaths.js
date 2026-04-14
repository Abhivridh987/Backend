module.exports = {
    "/auth/root": {
        "get": {
            "tags": ["Authentication"],
            "summary": "Root endpoint for authentication",
            "description": "Test endpoint to verify authentication API is working",
            "responses": {
                "200": {
                    "description": "Authentication API Root is Working",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Auth API Root"
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

    "/auth/login": {
        "post": {
            "tags": ["Authentication"],
            "summary": "Login a user",
            "description": "Authenticate user with email and password credentials",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string",
                                    "format": "email",
                                    "example": "mary@example.com",
                                    "description": "User email address"
                                },
                                "password": {
                                    "type": "string",
                                    "example": "mary123",
                                    "description": "User password"
                                }
                            },
                            "required": ["email", "password"]
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "User Logged in Successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Login successful"
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
                                        "type": "string",
                                        "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
                                    },
                                    "token_decoded": {
                                        "type": "object",
                                        "properties": {
                                            "email": {"type": "string"},
                                            "username": {"type": "string"},
                                            "_id": {"type": "string"},
                                            "admin": {"type": "boolean"},
                                            "cart": {"type": "array"}
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Email and Password are required for login",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Email and Password are required for login"
                                    },
                                    "status": {"type": "number", "example": 400},
                                    "ok": {"type": "boolean", "example": false}
                                }
                            }
                        }
                    }
                },
                "401": {
                    "description": "Invalid credentials",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {"type": "string", "example": "Invalid credentials"},
                                    "status": {"type": "number", "example": 401},
                                    "ok": {"type": "boolean", "example": false}
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "User not found in database",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {"type": "string", "example": "User not found in database"},
                                    "status": {"type": "number", "example": 404},
                                    "ok": {"type": "boolean", "example": false}
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error occurred during login",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {"type": "string", "example": "Error occurred during login"},
                                    "status": {"type": "number", "example": 500},
                                    "ok": {"type": "boolean", "example": false}
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/auth/signup": {
        "post": {
            "tags": ["Authentication"],
            "summary": "Register a new user",
            "description": "Create a new user account with username, email and password",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "example": "maryuser",
                                    "description": "Username for the account"
                                },
                                "email": {
                                    "type": "string",
                                    "format": "email",
                                    "example": "mary@example.com",
                                    "description": "Email address for the account"
                                },
                                "password": {
                                    "type": "string",
                                    "example": "mary123",
                                    "description": "Password for the account (will be hashed with bcrypt)"
                                }
                            },
                            "required": ["username", "email", "password"]
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "User signed up successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "User signed up successfully"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 201
                                    },
                                    "ok": {
                                        "type": "boolean",
                                        "example": true
                                    },
                                    "user": {
                                        "type": "object",
                                        "properties": {
                                            "_id": {
                                                "type": "string",
                                                "example": "648878742b18d635a8889b9"
                                            },
                                            "username": {
                                                "type": "string",
                                                "example": "maryuser"
                                            },
                                            "email": {
                                                "type": "string",
                                                "example": "mary@example.com"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Username, Email, Password are required for signup",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Username, Email, Password are required for signup"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 400
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
                "409": {
                    "description": "User with this email already exists",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "User with this email already exists"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 409
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
                    "description": "Error occurred while saving user",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Error occurred while saving user"
                                    },
                                    "status": {
                                        "type": "number",
                                        "example": 500
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

    "/auth/logout": {
        "get": {
            "tags": ["Authentication"],
            "summary": "Logout a user",
            "description": "Clear the authentication cookie to logout the user",
            "security": [{"cookieAuth": []}],
            "responses": {
                "200": {
                    "description": "Logout Successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Logout Successfully"
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
    }

}