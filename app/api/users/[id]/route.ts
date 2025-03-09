import { servicesUser } from "@/app/server/Services/userServices";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }

    const user = await servicesUser.UserByID(id);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { message: "Error fetching user", error: error.message || error },
      { status: 500 }
    );
  }
}
