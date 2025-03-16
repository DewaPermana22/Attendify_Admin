import prisma from "@/app/server/prisma";
import { encryptPassowrd } from "../Utils/bcryptHelper";

export const authenticateUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error("User tidak ditemukan!");
    }

    if (!user.password) {
        throw new Error("Password tidak ditemukan!");
    }

    const passwordMatch = await encryptPassowrd(password);
    if (!passwordMatch) {
        throw new Error("Password salah!");
    }

    return user;
};
