"use client"; // Wajib di App Router

import { useQuery } from "@tanstack/react-query";
import { FetchUser } from "../Services/Fetchusers";

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: FetchUser,
        staleTime: 1000 * 60 * 5,
        retry: 3,
    });
};
