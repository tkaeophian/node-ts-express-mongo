import { Request, Response } from 'express';
export const getTodos = (req: Request, res: Response) => {
    res.status(200).json({ msg: 'Todos' });
};

export const getTodo = (req: Request, res: Response) => {
    res.status(200).json({ msg: 'Todo' });
};

export const createTodo = (req: Request, res: Response) => {
    res.status(200).json({ msg: 'Todo Created' });
};

export const updateTodo = (req: Request, res: Response) => {
    res.status(200).json({ msg: 'Todo Updated' });
};

export const deleteTodo = (req: Request, res: Response) => {
    res.status(200).json({ msg: 'Todo Deleted' });
};
