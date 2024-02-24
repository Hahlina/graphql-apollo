import gql from 'graphql-tag';

export const eventsSchema = gql`
    type Query {
        event(slug: String!): EventDetail!
        events: EventsWithPagination!
    }

    type EventsWithPagination {
        next: String
        previous: String
        results: [Event]
    }

    type Event {
        id: ID!
        name: String!
        description: String
        is_show_text: Boolean
        image: String
        price: String
        charity: Boolean
        start_time: String
        location: String
        address: String
        slug: String
    }

    type EventDetail {
        id: ID!
        name: String!
        description: String
        is_show_text: Boolean
        image: String
        poster: String
        charity: Boolean
        start_time: String
        price: String
        location: String
        address: String
        genre: String
        booking_count: String
        slug: String
        music_band: [MusicBand]
        gallery: [Gallery]
        video: [Video]
        location_link: String
        google_calendar: String
        eventComments: [Comment]
    }

    type Gallery {
        id: ID
        image: String
        width: Int
        height: Int
        event: Int!
    }

    type Video {
        id: ID
        event: Int!
        youtube_url: String
        title: String
        thumbnail: Thumbnail
    }

    type Thumbnail {
        url: String
        width: Int
        height: Int
    }
`;
