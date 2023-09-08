import gql from 'graphql-tag';

export const commentSchema = gql`
    extend type Query {
        comments(eventId: ID!): [Comment]
        comment(id: ID): Comment
    }

    type Comment {
        id: ID
        content: String
        author: Author
        parent: Int
        created_at: String
        updated_at: String
    }

    type Author {
        id: ID!
        name: String
        email: String!
        image: String
    }
`;
