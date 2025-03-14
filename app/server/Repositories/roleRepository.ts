import { Prisma, PrismaClient } from "@prisma/client"
import { get } from "http"


const prisma = new PrismaClient()
export const roleRepository = {
    getAllRoles: async () => {
        const roles = await prisma.role.findMany()
        return roles
    },
}