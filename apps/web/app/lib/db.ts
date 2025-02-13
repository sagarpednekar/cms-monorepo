/**
 * This file is used to create a global instance of Prisma Client using skeleton pattern.
 * 
  PRISMA CONNECTION MANAGEMENT
   - Create singleton pattern for PrismaClient
   - Check for existing connection in global scope
   - Add proper error handling
   - Handle connection pooling
   - Implement proper cleanup
 */

import { PrismaClient } from "@prisma/client";

const globalPrisma = global as { prisma?: PrismaClient };

export const prisma =
  globalPrisma.prisma ||
  new PrismaClient({
  });

if (process.env.NODE_ENV !== "production") globalPrisma.prisma = prisma;
