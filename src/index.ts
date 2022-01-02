import {configureGraphQL} from "./config/contextConfig";

const express = require('express');

const startApolloServer = async (): Promise<void> => {
    const app = express();
    const apolloServer = configureGraphQL();
    await apolloServer.start();
    apolloServer.applyMiddleware({app, path: '/graphql'});

    app.listen({port: 4000}, () => {
        console.log('🚀 Apollo Server on http://localhost:4000/graphql');
    });
}

startApolloServer().catch((reason) => {
    console.log(reason)
});

