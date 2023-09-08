import gql from 'graphql-tag';

export const performersSchema = gql`
    extend type Query {
        performer(slug: String!): Performer
        performers: [Performer]
    }

    type Performer {
        id: ID!
        name: String!
        slug: String
        logo: String
        poster: String
        description: String
        bank_to_support: String
        created_at: String
        social_media: PerformerSocial
        participant: [Participant]
        gallery: [PerformerGallery]
        video: [PerformerVideo]
    }

    type PerformerSocial {
        website: String
        telegram: String
        instagram: String
        youtube: String
        tiktok: String
    }

    type PerformerGallery {
        id: ID
        image: String
        width: Int
        height: Int
        performer: Int!
    }

    type PerformerVideo {
        id: ID
        performer: Int!
        youtube_url: String
        title: String
        default_thumbnail: Thumbnail
        medium_thumbnail: Thumbnail
        high_thumbnail: Thumbnail
        standard_thumbnail: Thumbnail
        maxres_thumbnail: Thumbnail
    }
`;
