import { Resolvers } from '../types/types';

export const feedBackResolver: Resolvers = {
    Mutation: {
        postFeedback: (_, { input }, { dataSources }) => {
            return dataSources.postFeedback(input);
        }
    }
};
