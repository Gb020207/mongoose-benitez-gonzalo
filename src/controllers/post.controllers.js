import { Post } from "../models/post.models.js";

export const createPost = async (req, res) => {
    const { post, user } = req.body;
    try {
        if (post === "" || post === undefined || user === undefined || user === "") {
            return res.status(500).json({
                msg: "Todos los campos son requeridos"
            })
        }
        const newPost = await Post.create({
            post,
            user,
        })
        res.status(201).json({
            ok: true,
            msg: "Post creado",
            data: newPost,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            msg: "Error del servidor",
        })
    }
}
export const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find().populate("user", "username")
        res.status(200).json({
            ok: true,
            data: posts,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error de servidor"
        })
    }

}
export const getPostbyId = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).json({
                msg: "El id es invalido o no existe. Verifica si el id correcto"
            })
        }
        const post = await Post.findById(id).populate("user", "username");
        res.status(200).json({
            ok: true,
            data: post
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error del servidor"
        })
    }

}
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { post } = req.body;
    try {
        if (!id || !post) {
            return res.status(404).json({
                msg: "Verifica que los campos sean correctos"
            })
        }
        const postupdate = await Post.findByIdAndUpdate(
            id,
            { post },
            { new: true }
        )
        res.status(201).json({
            ok: true,
            msg: "Posteo actualizado",
            data: postupdate,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: true,
            msg: "Error del servidor"
        })
    }

}
export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).json({
                msg: "El id es invalido o no existe. Verifica si el id correcto"
            })
        }
        const post = await Post.findByIdAndDelete(id).populate("user", "username")
        res.status(200).json({
            ok: true,
            msg: "Posteo borrado",
            data: post
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            msg: "Error de servidor"
        })

    }

}