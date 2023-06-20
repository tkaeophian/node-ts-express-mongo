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
/**
 * @swagger
 *
 * /api/todos:
 *   get:
 *     description: List todo
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: the list of the todos
 */
router.get('/', getTodos);
// GET ONE
/**
 * @swagger
 *
 * /api/todos/{id}:
 *   get:
 *     description: Get Todo
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: todo id
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: get todo
 */
router.get('/:id', getTodo);
// CREATE
router.post('/', createTodo);
// DELETE
router.delete('/:id', deleteTodo);
// UPDATE
router.patch('/:id', updateTodo);

export default router;
