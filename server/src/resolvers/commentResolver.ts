import { Resolvers } from '../types/types';

export const commentResolver: Resolvers = {
    Query: {
        comments: (_, { eventId }, { dataSources }) => dataSources.getComments(eventId),
        comment: (_, { id }, { dataSources }) => dataSources.getComment(id)
    }
};
