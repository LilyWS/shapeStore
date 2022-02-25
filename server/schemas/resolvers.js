const { AuthenticationError } = require('apollo-server-express');
const { Shape, User, Cart } = require('../models');

const { signToken } = require('../utils/auth');

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
    },
    Mutation: {
        addUser: async (_, args) => {
            const user = await User.create(args);
            await user.save();
            const token = signToken(user);
            return { token, user };
        },
        login: async (_, {username, password}) => {
            const user = await User.findOne({username});
            
            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
        }
    }

};

module.exports = resolvers;