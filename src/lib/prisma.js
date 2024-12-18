import { PrismaClient } from "@prisma/client"

let prisma = await new PrismaClient()


export default prisma