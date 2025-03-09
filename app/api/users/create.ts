// import { NextApiRequest, NextApiResponse } from "next"
// import { usersController } from "../../server/Controllers/usersController";

// export default async function handler(req : NextApiRequest, res : NextApiResponse) {
//     try {
//         if (req.method === 'POST') return await usersController.createUser(req, res);
//         return res.status(405).json({message : "method not allowed"});
//     } catch (error) {
//         return res.status(500).json({message : "error at adding users, in handler", error : error});
//     }
// }