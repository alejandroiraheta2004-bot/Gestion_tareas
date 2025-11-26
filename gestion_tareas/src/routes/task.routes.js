import express from 'express';
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/task.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { checkRole } from '../middlewares/role.middleware.js';
import { validateTaskBody } from '../middlewares/validateTask.middleware.js';

const router = express.Router();

router.get('/', authenticate, getTasks);
router.get('/:id', authenticate, getTaskById);
router.post('/', authenticate, checkRole('admin'), validateTaskBody, createTask);
router.put('/:id', authenticate, checkRole('admin'), validateTaskBody, updateTask);
router.delete('/:id', authenticate, checkRole('admin'), deleteTask);

export default router;
