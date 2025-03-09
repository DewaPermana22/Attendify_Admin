import { syncBuiltinESMExports } from "module";
import { userRepository } from "../Repositories/userRepository"
import { encryptPassowrd } from "../Utils/bcryptHelper";
import { Prisma } from "@prisma/client";

export const servicesUser = {
    async AllUser() {
        return await  userRepository.getAll();
    },

    async UserByID(id : number) {
        return await userRepository.getByID(id);
    },

    async Adduser(users : Prisma.usersCreateInput) {
        const hashPassword = await encryptPassowrd(users.password);
        const referallCode = await Math.random().toString(36).substring(2, 8).toUpperCase();
        const referralInput: Prisma.referral_codeCreateNestedOneWithoutUsersInput = {
          create: {
            code: referallCode,
          },
        };
        return await userRepository.createUser({...users, password: hashPassword, referral: referralInput});
    }
}