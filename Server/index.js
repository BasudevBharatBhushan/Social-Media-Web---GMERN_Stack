const {ApolloServer} = require('apollo-server');  //installing Apollo by default install express server
const mongoose = require(`mongoose`); //ORM lib which let us interface with mongodb

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers')
const {MONGODB} = require('./config.js');



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req}) => ({req})
});

mongoose.connect(MONGODB,{useNewUrlParser:true})
.then(()=>{
    console.log('MongoDB Connected');
    return server.listen({port:5000});
})
.then((res)=>{
    console.log(`Server running at ${res.url}`)
});