import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
import dotenv from 'dotenv';
dotenv.config();

export const authenticate = async (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: 'No autorizado' });
    const token = auth.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(payload.id);
        if (!user) return res.status(401).json({ message: 'No autorizado' });
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token no valido' });
    }
};
