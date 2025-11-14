import pool from '../config/database.js';

export const getAllSubcategories = async() => {
    const [rows] = await  pool.query(`
            SELECT 
            s.id, 
            s.nombre AS nombre_subcategoria,
            c.nombre AS nombre_categoria
            FROM subcategorias s
            INNER JOIN categorias c ON s.id_categoria = c.id
        `);
    return rows;
}

export const getSubcategoryById = async(id) =>{
    const [rows] = await  pool.query(`
            SELECT 
            s.id, 
            s.nombre AS nombre_subcategoria,
            c.nombre AS nombre_categoria
            FROM subcategorias s
            INNER JOIN categorias c ON s.id_categoria = c.id
            WHERE s.id = ?
        `, [id]);
    return rows[0];
}

export const createSubcategory = async(subcategory) =>{
    const { nombre, id_categoria } = subcategory;
    
    const [result] = await pool.query(`
            INSERT INTO 
            subcategorias (
                nombre,
                id_categoria
            )
            VALUES (?, ?)
        `, [nombre, id_categoria]);
    return {
        idSubcategory: result.insertId,
        data: result
    }
}

export const updateSubcategory = async(id, subcategory) =>{
    const { nombre, id_categoria } = subcategory;
    const [result] = await pool.query(`
            UPDATE subcategorias 
            SET
            nombre = ?,
            id_categoria = ?
            WHERE id = ?
        `, [nombre, id_categoria, id]);
    return { result }
}

export const deleteSubcategory = async(id) => {
    const [result] = await pool.query(`
            DELETE 
            FROM subcategorias
            WHERE id = ?
        `, [id]);
    return { message: "Subcategoria eliminada" }
}