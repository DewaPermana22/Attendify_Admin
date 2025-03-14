"use client";

import { useQuery } from "@tanstack/react-query";
import InstanceAPI from "../Utils/apiInstance";

//GET
export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response : any = await InstanceAPI("GET", "/users");
            return response.json
        },
        staleTime: 1000 * 60 * 5,
        retry: 3,
    });
};


//GET BY ID
export const useUserByID = (id : number) => {
    return useQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            const response : any = await InstanceAPI("GET", `/users/${id}`);
            return response
        },
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
        placeholderData : undefined
    });
};
