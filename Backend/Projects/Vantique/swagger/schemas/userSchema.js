module.exports = {
    "User":{
        "type":"object",
        "properties":{
            "_id": {
                "type": "string",
                "description": "The unique identifier of the bag",
                "example": "648878742b18d563a8889b9"
            },
            "username":{
                "type":"string",
                "description":"Name of the user",
                "example":"Mary"
            },
            "email":{
                "type":"string",
                "description":"Each user logins with a unique email id or gmail",
                "example":"mary@example.com"
            },
            "password":{
                "type":"string",
                "description":"Each user protects their account with unique password",
                "example":"mary123"
            },
            "createdAt": {
                "type": "string",
                "format": "date-time",
                "description": "Timestamp when the bag was created",
                "example": "2024-06-10T15:30:00.000Z"
            },
            "updatedAt": {
                "type": "string",
                "format": "date-time",
                "description": "Timestamp when the bag was last updated",
                "example": "2024-06-10T15:30:00.000Z"
            }
        }
    },
    "UserSignUp":{
        "type":"object",
        "properties":{
            "username":{
                "type":"string",
                "description":"Name of the user",
                "example":"Mary"
            },
            "email":{
                "type":"string",
                "description":"Each user logins with a unique email id or gmail",
                "example":"mary@example.com"
            },
            "password":{
                "type":"string",
                "description":"Each user protects their account with unique password",
                "example":"mary123"
            }
        },
        "required":["username","email","password"]
    },
    "UserLogin":{
        "type":"object",
        "properties":{
            "username":{
                "type":"string",
                "description":"Name of the user",
                "example":"Mary"
            },
            "email":{
                "type":"string",
                "description":"Each user logins with a unique email id or gmail",
                "example":"mary@example.com"
            },
            "password":{
                "type":"string",
                "description":"Each user protects their account with unique password",
                "example":"mary123"
            }
        },
        "required":["email","password"]
    },
    "UserList": {
        "type": "array",
        "items": {
            "$ref": "#/components/schemas/User"
        },
        "description": "A list of bag objects"
    }
}