import {Resolvers} from "../types/types";

export const commentResolver: Resolvers = {
    Query: {
        comments: (_, {eventId}, {dataSources}) => {
            return dataSources.getComments(eventId)
        },
        comment: (_, {id}, {dataSources}) => {
            return dataSources.getComment(id)
        },

    },
}