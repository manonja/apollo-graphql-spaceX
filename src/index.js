// imports the ApolloServer class from apollo-server, along with our (currently undefined) schema from src/schema.js.
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();
//  creates a new instance of ApolloServer and passes it the imported schema via the typeDefs property.
const server = new ApolloServer({
    typeDefs,
    dataSources: () => ({
        launchAPI: new LaunchAPI(),
        userAPI: new UserAPI({ store })
    })
});


server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
});
