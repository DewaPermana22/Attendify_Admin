import bcrypt from "bcryptjs";

export const encryptPassowrd = async (password : string) => {
    return await bcrypt.hash(password, 10)
}


export const comparePassword = async (password : string, hashPassword : string) => {
    return await bcrypt.compare(password, hashPassword)
}