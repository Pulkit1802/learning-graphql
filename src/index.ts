import express, { Application } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4"
import {ApolloServerPluginDrainHttpServer} from "@apollo/server/plugin/drainHttpServer";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import http from "http";
import configs from "./configs/configs";

const app: Application = express();

const typeDefs = `#graphql
    type Query {
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello World"
    },
}

const corsOptions = {
    origin: "http://localhost:3000",
}

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json({limit: "100kb"}));


const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
})

const startServer = async () => {
    await server.start();
    app.use('/graphql', expressMiddleware(server));

    const port = configs.PORT;

    httpServer.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();
