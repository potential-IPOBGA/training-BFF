export const resolvers = {
    Query: {
        groups: async (_, __, { dataSources }) => dataSources.trainingBackEndApi.getGroups(),
        autoGroup: async (_, __, { dataSources }) => dataSources.trainingBackEndApi.autoGroup(),
        trainersWithoutGroup: async (_, __, { dataSources }) => dataSources.getTrainersWithoutGroup(),
        traineesWithoutGroup: async (_, __, { dataSources }) => await dataSources.trainingBackEndApi.getTraineesWithoutGroup()
    },
};
