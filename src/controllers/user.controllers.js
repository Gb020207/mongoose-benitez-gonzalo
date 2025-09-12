import { User } from "../models/user.models.js";

export const createUser = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        //validaciones 

        const newUser = await User.create({
            username,
            email,
            password
        })
        res.status(201).json({
            ok: true,
            msg: "Se creo el usuario",
            data: newUser,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error de servidor"
        })
    }
} 