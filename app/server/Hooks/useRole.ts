"use client";

import { useQuery } from "@tanstack/react-query";
import InstanceAPI from "../Utils/apiInstance";

//GET
export const useRoles = () => {
    return useQuery({
        queryKey: ['role'],
        queryFn: async () => {
            const response : any = await InstanceAPI("GET", "/roles");
            return response.json
        },
        staleTime: 1000 * 60 * 5,
        retry: 3,
    });
};

