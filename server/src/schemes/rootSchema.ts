import gql from 'graphql-tag';

import { eventsSchema, authorsSchema, commentSchema, musicBandSchema, feedBackSchema, bookingSchema } from '../schemes';

export const typeDefs = gql`
    ${eventsSchema}
    ${musicBandSchema}
    ${commentSchema}
    ${feedBackSchema}
    ${authorsSchema}
    ${bookingSchema}
`;
