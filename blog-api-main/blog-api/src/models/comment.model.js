import pool from "../config/database.js";

export const getAllComments = async () => {
    const [rows] = await pool.query("SELECT * FROM comentarios");
    return rows;
};

export const getCommentById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM comentarios WHERE id = ?", [id]);
    return rows[0];
};

export const createComment = async ({ postId, contenido }) => {
    const [result] = await pool.query(
        "INSERT INTO comentarios (postId, contenido) VALUES (?, ?)",
        [postId, contenido]
    );
    return result.insertId;
};

export const updateComment = async (id, contenido) => {
    const [result] = await pool.query(
        "UPDATE comentarios SET contenido = ? WHERE id = ?",
        [contenido, id]
    );
    return result.affectedRows > 0;
};

export const deleteComment = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM comentarios WHERE id = ?",
        [id]
    );
    return result.affectedRows > 0;
};