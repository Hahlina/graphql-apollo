import {
    eventResolver,
    authorResolver,
    commentResolver,
    musicBandResolver,
    feedBackResolver,
    bookingResolver
} from '../resolvers';

import type { Resolvers } from '../types/types';

export const resolvers: Resolvers = {
    Query: {
        ...eventResolver.Query,
        ...musicBandResolver.Query,
        ...commentResolver.Query,
        ...authorResolver.Query,
        ...bookingResolver.Query
    },
    Mutation: {
        ...feedBackResolver.Mutation,
        ...bookingResolver.Mutation
    },
    EventDetail: {
        ...eventResolver.EventDetail
    }
};
