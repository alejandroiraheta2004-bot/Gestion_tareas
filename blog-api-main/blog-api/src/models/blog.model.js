import pool from "../config/database.js";

export const getAllBlogs = async () => {
    const [rows] = await pool.query(`
    SELECT 
    b.id,
    b.titulo,
    b.contenido,
    b.imagen,
    u.nombre AS nombre_usuario,
    c.nombre AS nombre_categoria,
    s.nombre AS nombre_subcategoria
    b.created_at,
    FROM blogs AS b
    INNER JOIN usuarios AS u ON b.user_id = u.id
    INNER JOIN categorias AS c ON b.category_id = c.id
    INNER JOIN subcategorias AS s ON b.subcategory_id = s.id
    ORDER BY b.created_at DESC
`);

    return rows;
};

export const getBlogById = async (id) => {
    const [rows] = await pool.query(
        `SELECT 
        b.id,
        b.titulo,
        b.contenido,
        b.imagen,
        u.nombre AS nombre_usuario,
        c.nombre AS nombre_categoria,
        s.nombre AS nombre_subcategoria,
        b.created_at,   
        b.updated_at
        FROM blogs AS b
        INNER JOIN usuarios AS u ON b.user_id = u.id
        INNER JOIN categorias AS c ON b.category_id = c.id
        INNER JOIN subcategorias AS s ON b.subcategory_id = s.id
        WHERE b.id = ?`,
        [id]
    ); 
    return rows[0];
};

export const createBlog = async (blog) => {
    const { titulo, contenido, imagen, usuario_id, categoria_id, subcategoria_id } = blog;
    const [result] = await pool.query(
        `INSERT INTO blogs (titulo, contenido, imagen, usuario_id, categoria_id, subcategoria_id) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [titulo, contenido, imagen, usuario_id, categoria_id, subcategoria_id]
    );
    return{id: result.insertId, data: result} 
};

export const updateBlog = async (id, blog) => {
    const { titulo, contenido, imagen,usuario_id, categoria_id, subcategoria_id } = blog;
    await pool.query(
        `UPDATE blogs 
        SET titulo = ?, contenido = ?, imagen = ?,usuario = ?, categoria_id = ?, subcategoria_id = ?
        WHERE id = ?`,
        [titulo, contenido, imagen,usuario_id , categoria_id, subcategoria_id, id]
    );
    return {result}
}

export const deleteBlog = async (id) => {
    const {result} = await pool.query(`DELETE FROM blogs WHERE id = ?`, [id]);
    return result.affectedRows;
}