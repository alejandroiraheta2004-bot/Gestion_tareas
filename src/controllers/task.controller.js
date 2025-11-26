import { Task } from '../models/task.model.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.getAll();
        return res.json(tasks);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener tareas' });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.getById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        return res.json(task);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener la tarea' });
    }
};

export const createTask = async (req, res) => {
    try {
        const payload = { ...req.body, user_id: req.user.id };
        const task = await Task.create(payload);
        return res.status(201).json({
            message: 'Tarea creada con éxito',
            task
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al crear la tarea' });
    }
};

export const updateTask = async (req, res) => {
    try {
        const id = req.params.id;

        const exists = await Task.getById(id);
        if (!exists) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        const updated = await Task.update(id, req.body);

        return res.json({
            message: 'Tarea actualizada con éxito',
            task: updated
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al actualizar la tarea' });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;

        const exists = await Task.getById(id);
        if (!exists) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        await Task.delete(id);

        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al eliminar la tarea' });
    }
};
