import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const userRepository = {
    async getAll() {
        return await prisma.users.findMany(
            {
                select : {
                    id : true,
                    name : true,
                    fullname : true,
                    email : true,
                    referral :{ 
                        select : {code : true}
                    },
                    role : {
                        select : {name : true}
                    },
                    division : {
                        select : {name : true}
                    },
                    department : {
                        select : {name : true}
                    }
                }
            }
        );
    },

    async getByID(id : number){
        return await prisma.users.findUnique({where : {id}})
    },

    async createUser(data:Prisma.usersCreateInput){
        return await prisma.users.create({ data })
    }
}