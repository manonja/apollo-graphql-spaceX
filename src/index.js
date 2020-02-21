// imports the ApolloServer class from apollo-server, along with our (currently undefined) schema from src/schema.js.
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

//  creates a new instance of ApolloServer and passes it the imported schema via the typeDefs property.
const server = new ApolloServer({typeDefs});