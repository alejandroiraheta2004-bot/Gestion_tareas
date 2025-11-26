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

    async update(id, { title, description, status }) {
        await pool.query('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [title, description, status, id]);
        return this.getById(id);
    },

    async delete(id) {
        await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
        return true;
    }
};
