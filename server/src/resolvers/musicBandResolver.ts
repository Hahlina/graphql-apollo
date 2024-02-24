import { Resolvers } from '../types/types';

export const musicBandResolver: Resolvers = {
    Query: {
        musicBand: (_, { slug }, { dataSources }) => dataSources.getMusicBand(slug),
        musicBands: (_, __, { dataSources }) => dataSources.getMusicBands()
    }
};
