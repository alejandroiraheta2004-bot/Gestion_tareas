import pool from '../config/database.js';

export const getAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM usuarios');
  return rows;
};

export const getUserById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
  return rows[0];
};

export const createUser = async ({ nombre, email, password }) => {
  const [result] = await pool.query(
    'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
    [nombre, email, password]
  );
  return { id: result.insertId, nombre, email };
};

export const updateUser = async (id, { nombre, email }) => {
  await pool.query('UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?', [nombre, email, id]);
};

export const deleteUser = async (id) => {
  await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
};
