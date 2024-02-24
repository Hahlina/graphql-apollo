import gql from 'graphql-tag';

export const bookingSchema = gql`
    extend type Query {
        booking(id: Int!): Booking
        bookings: [Booking]
    }
    extend type Mutation {
        createBooking(input: BookingCreateInput!): Booking
        deleteBooking(id: Int!): ResponseStatus
    }

    type Booking {
        id: Int
        status: Boolean
        user: Int!
        unregistered_user: Int
        event: Int!
    }

    type ResponseStatus {
        success: Boolean!
    }

    input BookingCreateInput {
        status: Boolean
        user: Int!
        unregistered_user: Int
        event: Int!
    }
`;
