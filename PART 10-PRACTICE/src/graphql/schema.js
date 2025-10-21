const {gql} = require('graphql-tag');



const typeDefs = gql`
  type Book {
    id: ID!,
    title: String!,
    author: String!,
    category: String!
  },
  type Query {
    Books: [Book]!
    Book(id: ID!): Book
  },
  type Mutation {
    createBook(
      title: String!,
      author: String!,
      category: String!
    ): Book,
    deleteBook(id: ID!): [Book],
    updateBook(
      id: ID!,
      title: String,
      author: String,
      category: String,
    ): Book,
  }

`

module.exports = typeDefs;