import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { authOptions } from "./server/Utils/authOptions";

export default async function Home() {
    const session = await getServerSession(authOptions);
    if (session) {
        return redirect('./Pages/Main')
    } else {
        return redirect('./Pages/auth')
    }
}
