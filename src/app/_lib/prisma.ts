/* eslint-disable no-var */
import { PrismaClient } from "../../../prisma/generated/client"
import { PrismaPg } from "@prisma/adapter-pg"

declare global {
  // eslint-disable-next-line no-unused-vars
  var cachedPrisma: PrismaClient
}

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set")
  }
  const adapter = new PrismaPg({ connectionString })
  return new PrismaClient({ adapter })
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = createPrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = createPrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma
