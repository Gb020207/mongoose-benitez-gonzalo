import { User } from "../models/user.models.js";

export const createUser = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        //validaciones 
        if(username === "" || username === undefined || email === "" || email === undefined || password === "" || password === undefined){
           return res.status(500).json({
            msg: "todos los campos son requeridos"
           }) 
        }
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
export const getAlluser = async (req, res) => {
   try {
     const user = await User.find();
     res.status(200).json({
        ok:true,
        data: user,
     })
   } catch (error) {
    console.error(error)
    res.status(500).json({
        ok: false,
        msg: "Error del servidor"
    })
   }

    
}
export const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
          if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        ok: false,
        msg: "ID no válido",
      });
    }
        
        const user = await User.findById(id);

        res.status(201).json({
            ok: true,
            data: user,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error del servidor"
        })
    }
    
}
export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {username} = req.body;
    try {
        const userUpdate = await User.findByIdAndUpdate(
            id,
            {username},
            {new: true},
        )
        res.status(201).json({
            ok: true,
            msg: "Usuario actualizado exitosamente",
            data: userUpdate,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error del servidor",
        })
    }
    
}
export const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const userdelete = await User.findByIdAndDelete(id)
        res.status(200).json({
            ok: true,
            msg: "Usuario borrado con exito",
            data: userdelete,
        })
    } catch (error) {
     console.error(error)
     res.status(500).json({
        ok: false,
        msg: "Error del servidor",
     })   
    }
    
}