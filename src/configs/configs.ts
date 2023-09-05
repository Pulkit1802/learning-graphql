import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger';

dotenv.config({path: './.env'});

let prisma: PrismaClient;

try {
    prisma = new PrismaClient();
} catch (error) {
    logger.error("Error connecting to database: ", error);
    process.exit(1);
}

export const configs = {
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || "dev",
    prisma
}