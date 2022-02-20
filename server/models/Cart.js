const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    dimensions: {
        type: Number
    },
    points: {
        type: Number
    }
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;