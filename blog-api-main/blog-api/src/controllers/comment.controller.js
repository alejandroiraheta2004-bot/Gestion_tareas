import {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment
} from "../models/comment.model.js";

export const getComments = async (req, res) => {
    try {
        const comments = await getAllComments();
        res.json({ success: true, data: comments });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al obtener comentarios" });
    }
};

export const getComment = async (req, res) => {
    const { id } = req.params;

    try {
        const comment = await getCommentById(id);
        if (!comment) {
            return res.status(404).json({ success: false, message: "Comentario no encontrado" });
        }

        res.json({ success: true, data: comment });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al obtener comentario" });
    }
};

export const addComment = async (req, res) => {
    const { postId, contenido } = req.body;

    if (!postId || !contenido) {
        return res.status(400).json({ success: false, message: "postId y contenido son requeridos" });
    }

    try {
        const id = await createComment({ postId, contenido });
        res.json({ success: true, id });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al crear comentario" });
    }
};

export const editComment = async (req, res) => {
    const { id } = req.params;
    const { contenido } = req.body;

    try {
        const ok = await updateComment(id, contenido);
        if (!ok) {
            return res.status(404).json({ success: false, message: "Comentario no encontrado" });
        }

        res.json({ success: true, message: "Comentario actualizado" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al actualizar comentario" });
    }
};

export const removeComment = async (req, res) => {
    const { id } = req.params;

    try {
        const ok = await deleteComment(id);
        if (!ok) {
            return res.status(404).json({ success: false, message: "Comentario no encontrado" });
        }

        res.json({ success: true, message: "Comentario eliminado" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al eliminar comentario" });
    }
};