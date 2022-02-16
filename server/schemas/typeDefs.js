const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Shape {
        _id: ID
        name: String
        points: Int
    }

    type Query {
        shapes: [Shape]
        shape(id: ID!): Shape
    }
`;

module.exports = typeDefs;