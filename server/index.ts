import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import typeDefs from "./src/schemes";
import {resolvers} from "./src/resolvers";
import {LanternApi} from "./src/datasources/lanterApi";
import {PORT} from "./src/config";

const startApolloServer = async () => {
    const server = new ApolloServer({typeDefs, resolvers,});
    await startStandaloneServer(server, {
        context: async () => {
            const {cache} = server;
            return {
                dataSources: new LanternApi({cache}),
            };
        },
        listen: {port: PORT}
    });
}

startApolloServer().then(() => console.log("start server"))