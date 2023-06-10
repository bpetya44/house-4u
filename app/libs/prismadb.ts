//This file is used to connect to the database and export the connection to be used in other files.

import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
    }

    const client = globalThis.prisma || new PrismaClient();
    if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

    export default client;