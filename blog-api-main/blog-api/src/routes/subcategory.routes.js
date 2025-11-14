import express from 'express';
import { getSubcategories, getSubcategory, addSubcategory, editSubcategory, removeSubcategory } from '../controllers/subcategory.controller.js';

const router = express.Router();

router.get('/', getSubcategories);
router.get('/:id', getSubcategory);
router.post('/', addSubcategory);
router.put('/:id', editSubcategory);
router.delete('/:id', removeSubcategory);

export default router;