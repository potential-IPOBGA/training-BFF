import {resolvers} from "../resolvers";
import { ApolloServer } from 'apollo-server-express';
import {typeDefs} from "../graphql/TypeDef";

export const configureGraphQL = (): ApolloServer => {

    return new ApolloServer({
        typeDefs,
        resolvers
    })
}
