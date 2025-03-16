import { NextResponse } from "next/server";
import prisma from "@/app/server/prisma";
import { encryptPassowrd } from "@/app/server/Utils/bcryptHelper";

export async function POST(req: Request) {
    try {
        const { name, email, password, fullname } = await req.json();

        if (!name || !email || !password || !fullname) {
            return NextResponse.json({ error: "Semua field diperlukan!" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            return NextResponse.json({ error: "Email sudah digunakan!" }, { status: 400 });
        }

        const hashedPassword = await encryptPassowrd(password);

        const newUser = await prisma.user.create({
            data: { name, email, password: hashedPassword, fullname, provider: "local" },
        });

        return NextResponse.json({ message: "User berhasil dibuat!", user: newUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 });
    }
}
