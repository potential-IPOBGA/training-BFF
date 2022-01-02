import {TrainingBackEndApi} from "./datasource/TrainingBackEndApi";

const trainingBackEndApi = new TrainingBackEndApi();

export const resolvers = {
    Query: {
        groups: () => trainingBackEndApi.getGroups(),
    },
};
