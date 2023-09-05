import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config({path: './.env'});

let prisma: PrismaClient;

try {
    prisma = new PrismaClient();
    console.log("Prisma connected");
} catch (error) {
    process.exit(1);
}

export default {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || "dev",
    prisma
}typetype