import { Task } from '../models/task.model.js';

export const getTasks = async (req, res) => {
    const tasks = await Task.getAll();
    res.json(tasks);
};

export const getTaskById = async (req, res) => {
    const task = await Task.getById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(task);
};

export const createTask = async (req, res) => {
    const payload = { ...req.body, user_id: req.user.id };
    const task = await Task.create(payload);
    res.status(201).json({message: 'Tarea creada con éxito'});
};

export const updateTask = async (req, res) => {
    const updated = await Task.update(req.params.id, req.body);
    res.json({message: 'Tarea actualizada con éxito', task: updated});
};

export const deleteTask = async (req, res) => {
    await Task.delete(req.params.id);
    res.status(204).send();
};
