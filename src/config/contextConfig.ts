import {resolvers} from "../resolvers";
import {ApolloServer} from 'apollo-server-express';
import schema from "../graphql/TypeDef";
import {TrainingBackEndApi} from "../datasource/TrainingBackEndApi";

export const configureGraphQL = (): ApolloServer => {

    return new ApolloServer({
        typeDefs: schema,
        resolvers,
        dataSources: () => ({
            trainingBackEndApi: new TrainingBackEndApi(),
        }),
    })
}
