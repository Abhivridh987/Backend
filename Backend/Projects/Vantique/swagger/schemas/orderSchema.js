module.exports = {
    Order: {
        type: "object",
        properties: {
            _id: {
                type: "string",
                example: "648878742b18d563a8889b9"
            },
            userId: {
                type: "string",
                example: "648878742b18d563a8889b8"
            },
            orders: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        bagId: {
                            type: "string",
                            example: "648878742b18d563a8889b7"
                        },
                        quantity: {
                            type: "number",
                            example: 2
                        }
                    }
                }
            },
            status: {
                type: "string",
                example: "ORDER_PLACED",
                enum: ["ORDER_PLACED", "ORDER_CANCELLED", "ORDER_SHIPPED", "ORDER_DELIVERED"]
            },
            createdAt: {
                type: "string",
                format: "date-time",
                example: "2024-01-15T10:30:00.000Z"
            },
            updatedAt: {
                type: "string",
                format: "date-time",
                example: "2024-01-15T10:30:00.000Z"
            }
        }
    },

    CartItem: {
        type: "object",
        properties: {
            bagId: {
                type: "string",
                example: "648878742b18d563a8889b9"
            },
            quantity: {
                type: "number",
                example: 1
            }
        }
    }
}