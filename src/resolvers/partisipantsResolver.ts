import {Resolvers} from "../types/types";

export const partisipantsResolver: Resolvers = {
    Query: {
        participant: (_, {id}, {dataSources}) => {
            return dataSources.getParticipant(id)
        },
        participants: (_, __, {dataSources}) => {
            return dataSources.getParticipants()
        }
    }
}