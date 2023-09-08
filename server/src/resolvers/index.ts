import { eventResolver } from './eventResolver';
import { performerResolvers } from './performerResolvers';
import { commentResolver } from './commentResolver';
import { partisipantsResolver } from './partisipantsResolver';
import { feedBackResolver } from './feedBackResolver';
import { Resolvers } from '../types/types';

export const resolvers: Resolvers = {
    Query: {
        ...eventResolver.Query,
        ...performerResolvers.Query,
        ...commentResolver.Query,
        ...partisipantsResolver.Query
    },
    Mutation: {
        ...feedBackResolver.Mutation
    },

    Event: {
        ...eventResolver.Event
    }
};
