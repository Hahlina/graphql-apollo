import gql from 'graphql-tag';

export const commentSchema = gql`
    extend type Query {
        comments(eventId: String!): [Comment]
        comment(id: String!): Comment
    }

    type Comment {
        id: ID
        content: String!
        author: CommentAuthor
        event: Int!
        is_edited: Boolean
        parent: Int
        created_at: String
        updated_at: String
    }

    type CommentAuthor {
        id: ID!
        name: String
        email: String!
        image: String
    }
`;
