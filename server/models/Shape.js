const { Schema, model } = require('mongoose');

const shapeSchema = new Schema({
    name: {
        type: String
    },
    points: {
        type: Number
    }
});

const Shape = model('Shape', shapeSchema);

module.exports = Shape;