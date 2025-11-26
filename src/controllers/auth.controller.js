import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
import dotenv from 'dotenv';
dotenv.config();

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existing = await User.findByEmail(email);
        if (existing) {
            return res.status(400).json({ message: 'El email ya está en uso' });
        }

        const hashed = await bcrypt.hash(password, 10);

        const users = await User.create({ 
            name, 
            email, 
            password: hashed, 
            role: role || "user"
        });

        return res.status(201).json({
            message: "Usuario registrado con éxito",
            user: {
                id: users.id,
                name: users.name,
                email: users.email
            }
        });

    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findByEmail(email, true);
        if (!user) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        return res.json({ 
            message: "Login exitoso",
            token 
        });

    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

