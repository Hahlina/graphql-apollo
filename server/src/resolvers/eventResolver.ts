import { Resolvers } from '../types/types';

export const eventResolver: Resolvers = {
    Query: {
        event: (_, { slug }, { dataSources }) => {
            return dataSources.getEvent(slug);
        },
        events: (_, __, { dataSources }) => {
            return dataSources.getEvents();
        }
    },
    Event: {
        eventComments: ({ id }, __, { dataSources }) => {
            return dataSources.getComments(id);
        }
    }
};
