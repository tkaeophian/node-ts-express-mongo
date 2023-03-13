import {
    createTodo,
    deleteTodo,
    getTodo,
    getTodos,
    updateTodo
} from '../controllers/todoController';

import authGuard from '../middleware/authGuard';
import express from 'express';

const router = express.Router();
// register auth guard for all todo endpoints
router.use(authGuard);
// GET ALL
router.get('/', getTodos);
// GET ONE
router.get('/:id', getTodo);
// CREATE
router.post('/', createTodo);
// DELETE
router.delete('/:id', deleteTodo);
// UPDATE
router.patch('/:id', updateTodo);

export default router;
