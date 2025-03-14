import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { roleService } from "../Services/roleServices";

export const roleControllers = {
    async getAllRoleName (req : Request) {
        try {
            const roles = await roleService.getAllRoles();
            return { status: 200, json: roles };
        } catch (error) {
            return { status: 500, json: { message: "error when get all roles", error: error } };
        }
    },
};