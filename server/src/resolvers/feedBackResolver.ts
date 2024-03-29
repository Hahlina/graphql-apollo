import { Resolvers } from '../types/types';

export const feedBackResolver: Resolvers = {
    Mutation: {
        postFeedback: (_, { input }, { dataSources }) => dataSources.postFeedback(input)
    }
};
