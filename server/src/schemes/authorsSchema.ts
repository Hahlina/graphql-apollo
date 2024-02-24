import gql from 'graphql-tag';

export const authorsSchema = gql`
    extend type Query {
        authors: [Author]
        author(id: Int!): Author
    }

    type Author {
        id: ID
        name: String!
        slug: String
        views: Int
    }
`;
