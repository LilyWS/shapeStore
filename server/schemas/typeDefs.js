const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        cart: Cart
    }

    type Shape {
        _id: ID
        name: String
        points: Int
    }

    type Cart {
        _id: ID
        user: User
        contents: [cartItem]
    }

    type cartItem {
        product: Shape
        quantity: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(id: ID!): User
        shapes: [Shape]
        shape(id: ID!): Shape
        cart(id: ID!): Cart
    }

    type Mutation {
        login(username:String!, password:String!): Auth
        addUser(username:String!, password:String!): Auth
    }
`;

module.exports = typeDefs;