import gql from 'graphql-tag';

export const participantsSchema = gql`
    extend type Query {
        participant(id: ID!): Participant
        participants: [Participant!]!
    }

    type Participant {
        id: ID!
        name: String!
        photo: String
        performer: Int!
    }
`;
