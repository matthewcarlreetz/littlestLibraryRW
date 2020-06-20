import gql from 'graphql-tag'

export const schema = gql`
  type Library {
    id: Int!
    address: String!
    city: String!
    state: String!
    zip: String!
    latitude: Float!
    longitude: Float!
    avatar: String!
    status: String!
  }

  type Query {
    libraries: [Library!]!
    library(id: Int!): Library!
  }

  input CreateLibraryInput {
    address: String!
    city: String!
    state: String!
    zip: String!
    latitude: Float!
    longitude: Float!
    avatar: String!
    status: String!
  }

  input UpdateLibraryInput {
    address: String
    city: String
    state: String
    zip: String
    latitude: Float
    longitude: Float
    avatar: String
    status: String
  }

  type Mutation {
    createLibrary(input: CreateLibraryInput!): Library!
    updateLibrary(id: Int!, input: UpdateLibraryInput!): Library!
    deleteLibrary(id: Int!): Library!
  }
`
