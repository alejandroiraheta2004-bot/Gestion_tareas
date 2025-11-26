import { pool } from '../config/database.js';

export const Task = {
    async getAll() {
        const [rows] = await pool.query('SELECT * FROM tasks');
        return rows;
    },

    async getById(id) {
        const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
        return rows[0];
    },

    async create({ title, description, user_id }) {
        const [result] = await pool.query(
            'INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)',
            [title, description, user_id]
        );

        return { id: result.insertId, title, description, user_id };
    },

    async update(id, data) {
        // Tomamos solo los campos que existen
        const fields = [];
        const values = [];

        if (data.title !== undefined) {
            fields.push("title = ?");
            values.push(data.title);
        }

        if (data.description !== undefined) {
            fields.push("description = ?");
            values.push(data.description);
        }

        if (data.status !== undefined) {
            fields.push("status = ?");
            values.push(data.status);
        }

        if (fields.length === 0) {
            throw new Error("No hay campos válidos para actualizar");
        }

        values.push(id);

        const sql = `UPDATE tasks SET ${fields.join(', ')} WHERE id = ?`;
        await pool.query(sql, values);

        return this.getById(id);
    },

    async delete(id) {
        const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
        
        // result.affectedRows = 1 si se borró, 0 si no existe
        return result.affectedRows > 0;
    }
};
