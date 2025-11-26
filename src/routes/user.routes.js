import express from 'express';
import { getUsers, getMe } from '../controllers/user.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { checkRole } from '../middlewares/role.middleware.js';

const router = express.Router();


router.get('/', authenticate, checkRole('admin'), getUsers);


router.get('/me', authenticate, getMe);

export default router;
