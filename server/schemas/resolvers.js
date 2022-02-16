const { Shape } = require('../models');

const resolvers = {
    Query: {
        shapes: async () => {
            return Shape.find();
        },
        shape: async (_, args) => {
            return Shape.findOne({_id: args.id});
        } 
    }
};

module.exports = resolvers;