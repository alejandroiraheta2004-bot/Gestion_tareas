import { User } from '../models/user.model.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.getAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const getMe = async (req, res) => {
    try {
        // req.user viene del middleware authenticate
        res.json(req.user);
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
