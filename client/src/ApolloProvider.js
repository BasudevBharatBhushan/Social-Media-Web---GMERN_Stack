import React from "react";
import App from './App'
// import {InMemoryCache} from 'apollo-cache-inmemory'
// import {createHttpLink} from 'apollo-link-http'
// import {ApolloProvider} from '@apollo/react-hooks'

// import ApolloClient from 'apollo-client';

import {ApolloClient,InMemoryCache, ApolloProvider} from '@apollo/client'


const client = new ApolloClient({
    uri:"http://localhost:5000/graphql",
    cache:new InMemoryCache()
})

function Apolloprovider(){
    return(
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    );
}

export default Apolloprovider;