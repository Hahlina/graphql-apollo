import {Resolvers} from "../types/types";

export const performerResolvers: Resolvers = {
    Query: {
        performer: (_, {slug}, {dataSources}) => {
            return dataSources.getPerformer(slug)
        },
        performers: (_, __, {dataSources}) => {
            return dataSources.getPerformers()
        }
    }
}