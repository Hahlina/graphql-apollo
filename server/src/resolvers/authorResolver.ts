import { Resolvers } from '../types/types';

export const authorResolver: Resolvers = {
    Query: {
        author: (_, { id }, { dataSources }) => dataSources.getAuthor(id),
        authors: (_, __, { dataSources }) => dataSources.getAuthors()
    }
};
