import { NextApiRequest } from "next";
import { usersController } from "../../server/Controllers/usersController";
import { NextResponse } from "next/server";

export async function GET(req : Request) {
    try {
        const users = await usersController.getAllUsers(req);
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "error at get all users, in handler", error: error }, { status: 500 });
    }
}