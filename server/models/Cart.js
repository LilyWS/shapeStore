const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User "
    },
    contents: [
        {
            item: {
                type: Schema.Types.ObjectId,
                ref: "Shape",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        },
    ]
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;