import { pool } from '../src/config/database.js';

(async () => {
    try {
        const [rows] = await pool.query('SELECT id, name, email, role FROM users');
        console.table(rows);
    } catch (err) {
        console.error('Error al leer usuarios:', err.message);
    } finally {
        await pool.end();
    }
})();
