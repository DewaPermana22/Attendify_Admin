"use client";
import { useUsers } from "../server/Hooks/useUsers";
export default function AddEmployees() {
  
    const { data, error } = useUsers();

    console.log("Users Data:", data);
    console.log("Error:", error);

    if (error) return <div>Error loading users</div>;
    if (!data || data.length === 0) return <div>Loading...</div>;

    return (
        <ul>
            {data.map((user : any) => (
                <li key={user.id}>{user.fullname}</li>
            ))}
        </ul>
    );
}
