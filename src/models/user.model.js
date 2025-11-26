import { pool } from '../config/database.js';

export const User = {
    async create({ name, email, password, role = 'user' }) {
        const [result] = await pool.query(
            'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, password, role]
        );
        return { id: result.insertId, name, email, role };
    },

    async findByEmail(email, includePassword = false) {
        const selection = includePassword ? '*' : 'id, name, email, role';
        const [rows] = await pool.query(`SELECT ${selection} FROM users WHERE email = ?`, [email]);
        return rows[0];
    },

    async findById(id) {
        const [rows] = await pool.query('SELECT id, name, email, role FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    ,

    async getAll() {
        const [rows] = await pool.query('SELECT id, name, email, role FROM users');
        return rows;
    }
};