const { Shape, User, Cart } = require('../models');

const resolvers = {
    Query: {
        shapes: async () => {
            return Shape.find();
        },
        shape: async (_, args) => {
            return Shape.findOne({_id: args.id});
        },
        users: async () => {
            return User.find().populate('cart');
        },
        user: async (_, args) => {
            return User.findOne({_id: args.id});
        },
        cart: async (_, args) => {
            return Cart.findOne({_id: args.id});
        }
        
    }
};

module.exports = resolvers;