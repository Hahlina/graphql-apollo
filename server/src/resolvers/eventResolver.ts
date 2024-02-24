import { Resolvers } from '../types/types';

export const eventResolver: Resolvers = {
    Query: {
        event: (_, { slug }, { dataSources }) => dataSources.getEvent(slug),
        events: (_, __, { dataSources }) => dataSources.getEvents()
    },
    EventDetail: {
        eventComments: ({ id }, __, { dataSources }) => dataSources.getComments(id)
    }
};
