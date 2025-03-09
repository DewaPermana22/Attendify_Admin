import { NextResponse } from "next/server";
import { servicesUser } from "../Services/userServices";
import { NextApiRequest } from "next";

export const usersController = {
    async getAllUsers(req : Request) {
        try {
            const users = await servicesUser.AllUser();
            return { status: 200, json: users };
        } catch (error) {
            return { status: 500, json: { message: "error when get all users", error: error } };
        }
    },

    async getOneUser(req : Request, {params} : {params : {id : string}}) {
        try {
            const id = Number(params.id);
            if (isNaN(id)) NextResponse.json({message : "Invalid id"});

            const user = await servicesUser.UserByID(id);
            if (!user) return NextResponse.json({message : "User not found"});

            return NextResponse.json(user);

        }catch (error : unknown) {
            console.error(error);
            return NextResponse.json({message : "Something went wrong", error : error});
        }        
    },

    async createUser(req : NextApiRequest) {
        try {
            const {name, fullname, email, password, referral_id, role_id, division_id, departement_id} = req.body;

            if (!name || !fullname || !email || !password || !referral_id || !role_id || !division_id || !departement_id) {
                return NextResponse.json({ message: "All fields are required" });
            }

            if (referral_id && isNaN(referral_id)) {
                return NextResponse.json({ message: "Invalid referral ID" });
            }
            if (role_id && isNaN(role_id)) {
                return NextResponse.json({ message: "Invalid role ID" });
            }
            if (division_id && isNaN(division_id)) {
                return NextResponse.json({ message: "Invalid division ID" });
            }
            if (departement_id && isNaN(departement_id)) {
                return NextResponse.json({ message: "Invalid departement ID" });
            }

            const user = await servicesUser.Adduser({
                 name,
                 fullname, 
                 email, 
                 password, 
                 referral: { connect: { id: referral_id } },
                 division: { connect: { id: division_id } },
                 department: { connect: { id: departement_id } },
                 role: { connect: { id: role_id }}
            });
            return NextResponse.json(user);
        } catch (error) {
            console.error(error);
            return NextResponse.json({message : "Something went wrong when creating user", error : error});
        }
    }
};