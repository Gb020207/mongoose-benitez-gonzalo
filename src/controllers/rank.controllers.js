import { Rank } from "../models/rank.models.js";


export const createRank = async (req, res) => {
    const {rank, level, user} = req.body;
    try {
        //validaciones 
        if(rank === "" || rank === undefined || level === "" || level === undefined || user === "" || user === undefined){
           return res.status(500).json({
            msg: "todos los campos son requeridos",
            
           }) 
           
        }
        const newRank = await Rank.create({
          rank,
          level,
          user,
        })
        res.status(201).json({
            ok: true,
            msg: "Se creo el Rango",
            data: newRank,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error de servidor"
        })
    }
} 
export const getAllranks = async (req, res) => {
   try {
     const ranks = await Rank.find().populate("user", "username");
     res.status(200).json({
        ok:true,
        data: ranks,
     })
   } catch (error) {
    console.error(error)
    res.status(500).json({
        ok: false,
        msg: "Error del servidor"
    })
   }

    
}
export const getRankById = async (req, res) => {
    const {id} = req.params;
    try {
        const rank = await Rank.findById(id).populate("user", "username");

        res.status(200).json({
            ok: true,
            data: rank,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error del servidor"
        })
    }
    
}
