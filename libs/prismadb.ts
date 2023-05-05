import { PrismaClient } from "@prisma/client";

/* This code is declaring a global variable `prisma` of type `PrismaClient` or `undefined`. This allows
the `prisma` variable to be accessed from any part of the codebase without having to import it
explicitly. */
declare global {
  var prisma: PrismaClient | undefined;
}

/* `const client = globalThis.prisma || new PrismaClient();` is initializing a variable `client` with
the value of `globalThis.prisma` if it exists, otherwise it creates a new instance of `PrismaClient`
and assigns it to `client`. This allows for the reuse of an existing `PrismaClient` instance if it
has already been created, or the creation of a new instance if it does not exist yet. */
const client = globalThis.prisma || new PrismaClient();

/* This line of code is checking if the current environment is not in production mode. If it is not in
production mode, it sets the global variable `prisma` to the value of `client`. This allows for the
reuse of the same `PrismaClient` instance across multiple requests during development, which can
improve performance and reduce resource usage. In production mode, this line of code is skipped and
the `PrismaClient` instance is not stored globally. */
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
