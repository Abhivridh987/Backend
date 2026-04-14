module.exports = {
    "Bag": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string",
                "description": "The unique identifier of the bag",
                "example": "648878742b18d563a8889b9"
            },
            "name": {
                "type": "string",
                "description": "The name of the bag (required)",
                "example": "Classic Leather Bag"
            },
            "brand": {
                "type": "string",
                "description": "The brand of the bag (required)",
                "example": "BrandX"
            },
            "model_no": {
                "type": "number",
                "description": "The model number of the bag (required)",
                "example": 1001
            },
            "description": {
                "type": "string",
                "description": "Detailed description of the bag (required)",
                "example": "A premium classic leather bag with high-quality craftsmanship"
            },
            "category": {
                "type": "string",
                "description": "The category of the bag (required)",
                "example": "leather"
            },
            "price": {
                "type": "number",
                "description": "The price of the bag in currency units (required)",
                "example": 5999
            },
            "discount": {
                "type": "number",
                "description": "Discount percentage on the bag (0-100, default is 0)",
                "minimum": 0,
                "maximum": 100,
                "example": 10
            },
            "rating": {
                "type": "number",
                "description": "Customer rating of the bag (0-5, default is 0)",
                "minimum": 0,
                "maximum": 5,
                "example": 4.5
            },
            "image_url": {
                "type": "string",
                "description": "URL of the bag image",
                "example": "https://example.com/images/classic-leather-bag.jpg"
            },
            "quantity": {
                "type": "number",
                "description": "Available quantity in stock (required, minimum 0)",
                "minimum": 0,
                "example": 50
            },
            "bestSeller": {
                "type": "boolean",
                "description": "Whether the bag is a best seller (default is false)",
                "example": true
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
        },
        "required": ["name", "brand", "model_no", "description", "category", "price", "quantity"]
    },

    "BagCreate": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "The name of the bag",
                "example": "Classic Leather Bag"
            },
            "brand": {
                "type": "string",
                "description": "The brand of the bag",
                "example": "BrandX"
            },
            "model_no": {
                "type": "number",
                "description": "The model number of the bag",
                "example": 1001
            },
            "description": {
                "type": "string",
                "description": "Detailed description of the bag",
                "example": "A premium classic leather bag with high-quality craftsmanship"
            },
            "category": {
                "type": "string",
                "description": "The category of the bag",
                "example": "leather"
            },
            "price": {
                "type": "number",
                "description": "The price of the bag in currency units",
                "example": 5999
            },
            "quantity": {
                "type": "number",
                "description": "Available quantity in stock",
                "example": 50
            },
            "discount": {
                "type": "number",
                "description": "Discount percentage on the bag (0-100)",
                "minimum": 0,
                "maximum": 100,
                "example": 10
            },
            "rating": {
                "type": "number",
                "description": "Customer rating of the bag (0-5)",
                "minimum": 0,
                "maximum": 5,
                "example": 4.5
            },
            "image_url": {
                "type": "string",
                "description": "URL of the bag image",
                "example": "https://example.com/images/classic-leather-bag.jpg"
            },
            "bestSeller": {
                "type": "boolean",
                "description": "Whether the bag is a best seller",
                "example": true
            }
        },
        "required": ["name", "brand", "model_no", "description", "category", "price", "quantity"]
    },

    "BagUpdate": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "The name of the bag",
                "example": "Classic Leather Bag"
            },
            "brand": {
                "type": "string",
                "description": "The brand of the bag",
                "example": "BrandX"
            },
            "model_no": {
                "type": "number",
                "description": "The model number of the bag",
                "example": 1001
            },
            "description": {
                "type": "string",
                "description": "Detailed description of the bag",
                "example": "A premium classic leather bag with high-quality craftsmanship"
            },
            "category": {
                "type": "string",
                "description": "The category of the bag",
                "example": "leather"
            },
            "price": {
                "type": "number",
                "description": "The price of the bag in currency units",
                "example": 5999
            },
            "quantity": {
                "type": "number",
                "description": "Available quantity in stock",
                "example": 50
            },
            "discount": {
                "type": "number",
                "description": "Discount percentage on the bag (0-100)",
                "minimum": 0,
                "maximum": 100,
                "example": 10
            },
            "rating": {
                "type": "number",
                "description": "Customer rating of the bag (0-5)",
                "minimum": 0,
                "maximum": 5,
                "example": 4.5
            },
            "image_url": {
                "type": "string",
                "description": "URL of the bag image",
                "example": "https://example.com/images/classic-leather-bag.jpg"
            },
            "bestSeller": {
                "type": "boolean",
                "description": "Whether the bag is a best seller",
                "example": true
            }
        }
    },

    "BagList": {
        "type": "array",
        "items": {
            "$ref": "#/components/schemas/Bag"
        },
        "description": "A list of bag objects"
    }
}
