import gql from "graphql-tag";

export const eventsSchema = gql`

    type Query{
        event(slug: String!): Event!
        events: [Event!]!
    }

    type Event{
        id: ID!
        name: String!
        description: String
        is_show_text: Boolean
        image: String
        poster: String
        charity: Boolean
        start_time: String
        location: String
        address: String
        genre: String
        booking_count: String
        slug: String
        performers: [Performer]
        gallery: [EventGallery]
        video: [EventVideo]
        eventComments: [Comment]
    }

    type EventGallery {
        id: ID
        image: String
        width: Int
        height: Int
        event: Int
    }

    type EventVideo{
        id: ID
        event: Int!
        youtube_url: String
        title: String
        default_thumbnail: Thumbnail
        medium_thumbnail: Thumbnail
        high_thumbnail: Thumbnail
        standard_thumbnail: Thumbnail
        maxres_thumbnail: Thumbnail
    }

    type Thumbnail{
        url: String
        width: Int
        height: Int
    }

`