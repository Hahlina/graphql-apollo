import gql from 'graphql-tag';
import { eventsSchema } from './eventsSchema';
import { performersSchema } from './performersSchema';
import { participantsSchema } from './participantsSchema';
import { commentSchema } from './commentSchema';
import { feedBackSchema } from './feedBackSchema';

const typeDefs = gql`
    ${eventsSchema}
    ${performersSchema}
    ${participantsSchema}
    ${commentSchema}
    ${feedBackSchema}
`;
export default typeDefs;
