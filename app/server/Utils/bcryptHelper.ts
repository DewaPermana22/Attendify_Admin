import bcrypt from "bcryptjs";

export const encryptPassowrd = async (password : string) => {
    return await bcrypt.hash(password, 10)
}