import { buildApolloServer } from "./apollo.server";
import { expressMiddleware } from "@apollo/server/express4"
import { Application, json } from "express";
import http, { Server } from "http";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import configs from "../configs/configs";
import logger from "../utils/logger";

export default async ( { app }: { app: Application } ) : Promise<Server> => {

    const corsOptions = {
        origin: "http://localhost:3000",
    }

    app.use(morgan(`${configs.NODE_ENV === "dev" ? "dev" : "tiny"}`));
    app.use(helmet());
    app.use(json({limit: "100kb"}));

    app.use(cors(corsOptions));

    app.get('/healthCheck', (req, res) => {
        try {
            
            res.status(200).json({
                message: "Server is running",
                uptime: process.uptime(),
            });

        } catch (error) {
            logger.error("Failed to check server health \n", error);
            
            res.status(500).json({
                message: "Not OK",
            });
        }
        
    });

    const server = http.createServer(app);

    const apolloServer = await buildApolloServer(server);
    await apolloServer.start();

    app.use('/graphql', expressMiddleware(apolloServer));

    logger.info("Express Setup Complete");

    return server;

}