const { Schema, model } = require('mongoose');

const shapeSchema = new Schema({
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

const Shape = model('Shape', shapeSchema);

module.exports = Shape;