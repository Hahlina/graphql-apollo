import gql from 'graphql-tag';

export const musicBandSchema = gql`
    extend type Query {
        musicBand(slug: String!): MusicBandDetail
        musicBands: [MusicBand]
    }

    type MusicBand {
        id: ID
        name: String!
        logo: String
        slug: String
    }

    type MusicBandDetail {
        id: ID!
        name: String!
        slug: String
        logo: String
        poster: String
        description: String
        bank_to_support: String
        email_band: String
        is_fan: Boolean
        member: [Member]
        song: [Song]
        gallery: [Gallery]
        video: [Video]
        social_network_links: [SocialNetworkLink]
    }

    type Song {
        id: ID
        song_name: String
        song_url: String
        single: Boolean
        song_image: String
        track_number: Int
        duration: String
        is_published: Boolean
        musicband: Int!
        album: Int
    }

    type SocialNetworkLink {
        id: Int
        social_network: String
        url: String!
    }

    type Member {
        id: ID
        name: String!
        photo: String
        musicband: Int!
    }
`;
