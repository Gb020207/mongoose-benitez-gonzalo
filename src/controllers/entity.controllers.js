import { Entity } from "../models/entity.models.js";


export const createEntity = async (req, res) => {
    const { type, characteristics } = req.body;
    try {
        if (type === "" || type === undefined || characteristics === undefined || characteristics === "") {
            return res.status(500).json({
                msg: "Todos los campos son requeridos"
            })
        }
        const newEntity = await Entity.create({
           type,
            characteristics,
        })
        res.status(201).json({
            ok: true,
            msg: "Entidad creado",
            data: newEntity,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            msg: "Error del servidor",
        })
    }
}
export const getAllEntity = async (req, res) => {
    try {
        const entity = await Entity.find()
        res.status(200).json({
            ok: true,
            data: entity,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error de servidor"
        })
    }

}
export const getEntitybyId = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).json({
                msg: "El id es invalido o no existe. Verifica si el id correcto"
            })
        }
        const entity = await Entity.findById(id)
        res.status(200).json({
            ok: true,
            data: entity
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error del servidor"
        })
    }

}
export const updateEntity = async (req, res) => {
    const { id } = req.params;
    const { characteristics } = req.body;
    try {
        if (!id || !characteristics) {
            return res.status(404).json({
                msg: "Verifica que los campos sean correctos"
            })
        }
        const entityupdate = await Entity.findByIdAndUpdate(
            id,
            { characteristics },
            { new: true }
        )
        res.status(201).json({
            ok: true,
            msg: "Entidad actualizada",
            data: entityupdate,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: true,
            msg: "Error del servidor"
        })
    }

}
export const deleteEntity = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).json({
                msg: "El id es invalido o no existe. Verifica si el id correcto"
            })
        }
        const entity = await Entity.findByIdAndDelete(id)
        res.status(200).json({
            ok: true,
            msg: "Entidad borrada",
            data: entity
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            msg: "Error de servidor"
        })

    }

}