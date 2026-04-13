module.exports = {
    "/auth/root":{
        "get":{
            "tags":[
                "Authentication"
            ],
            "summary":"Root endpoint for authentication",
            "responses":{
                "200":{
                    "description":"Authentication API Root is Working",
                    "content":{
                        "application/json":{
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "message":{
                                        "type":"string"
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
            "tags": [
                "Authentication"
            ],
            "summary": "Login a user",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string",
                                    "format": "email",
                                    "example":"mary@example.com"
                                },
                                "password": {
                                    "type": "string",
                                    "example":"mary123"
                                }
                            },
                            "required": ["email", "password"]
                        }
                    }
                }
            },
            "responses":{
                "200":{
                    "description":"User Logged in Successfully",
                    "content":{
                        "application/json":{
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "token":{
                                        "type":"string",
                                        "example":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODg3ODQyYjE4ZDU2M2E4ODg5YjkiLCJpYXQiOjE2ODg3ODQyMDAsImV4cCI6MTY4ODg2MDYyMH0.7n8sKq8mLh9v1z5lXo9k8s9s8s9s8s9s8s9s8s9s8"
                                    },
                                    "status":{
                                        "type":"number",
                                        "example":200
                                    },
                                    "ok":{
                                        "type":"boolean",
                                        "example":true
                                    },
                                    "message":{
                                        "type":"string",
                                        "example":"Login successful"
                                    },
                                    "token_decoded":{
                                        "type":"object",
                                        "properties":{
                                            
                                        }
                                    }

                                }
                            }
                        }
                    }
                },
                "400":{
                    "description":"Email and Password are required for login",
                    "content":{
                        "application/json":{
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "message":{
                                        "type":"string",
                                        "example":"Email and Password are required for login"
                                    },
                                    "status":{
                                        "type":"number",
                                        "example":400
                                    },
                                    "ok":{
                                        "type":"boolean",
                                        "example":true
                                    }
                                }
                            }
                        }
                    }

                },
                "401":{
                    "description":"Invalid credentials",
                    "content":{
                        "application/json":{
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "message":{
                                        "type":"string",
                                        "example":"Invalid credentials"
                                    },
                                    "status":{
                                        "type":"number",
                                        "example":401
                                    },
                                    "ok":{
                                        "type":"boolean",
                                        "example":true
                                    }
                                }
                            }
                        }
                    }
                },
                "404":{
                    "description":"User not found in database",
                    "content":{
                        "application/json":{
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "message":{
                                        "type":"string",
                                        "example":"User not found in database"
                                    },
                                    "status":{
                                        "type":"number",
                                        "example":404
                                    },
                                    "ok":{
                                        "type":"boolean",
                                        "example":false
                                    }
                                }
                            }
                        }
                    }
                },
                "500":{
                    "description":"Error occurred during login",
                    "content":{
                        "application/json":{
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "message":{
                                        "type":"string",
                                        "example":"Error occurred during login"
                                    },
                                    "status":{
                                        "type":"number",
                                        "example":500
                                    },
                                    "ok":{
                                        "type":"boolean",
                                        "example":false
                                    }
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
            "tags": [
                "Authentication"
            ],
            "summary": "Register a new user",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "example": "maryuser"
                                },
                                "email": {
                                    "type": "string",
                                    "format": "email",
                                    "example": "mary@example.com"
                                },
                                "password": {
                                    "type": "string",
                                    "example": "mary123"
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
            "tags": [
                "Authentication"
            ],
            "summary": "Logout a user",
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