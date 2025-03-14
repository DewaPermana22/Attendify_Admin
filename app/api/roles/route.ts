import { NextResponse } from "next/server";
import { roleControllers } from "@/app/server/Controllers/roleControllers";

export async function GET(req : Request) {
    try {
        const roles = await roleControllers.getAllRoleName(req);
        return NextResponse.json(roles, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "error at get all role, in handler", error: error }, { status: 500 });
    }
}