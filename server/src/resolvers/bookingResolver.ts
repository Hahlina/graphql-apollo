import { Resolvers } from '../types/types';

export const bookingResolver: Resolvers = {
    Query: {
        booking: (_, { id }, { dataSources }) => dataSources.getBooking(id),
        bookings: (_, __, { dataSources }) => dataSources.getBookings()
    },
    Mutation: {
        createBooking: (_, { input }, { dataSources }) => dataSources.createBooking(input),
        deleteBooking: (_, { id }, { dataSources }) => dataSources.deleteBooking(id)
    }
};
