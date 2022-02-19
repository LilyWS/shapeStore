const db = require('../config/connection');
const { Shape } = require('../models');

const shapeSeeds = require('./shapeSeeds.json');

db.once('open', async () => {
    try {
        await Shape.deleteMany({});
        await Shape.create(shapeSeeds);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    process.exit(0);
});