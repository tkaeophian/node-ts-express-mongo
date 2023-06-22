import { Request, Response } from 'express';
import UserService from '../service/user.service';
const userService = new UserService();

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = userService.getUsers();
        return res.send(users);
    } catch (e: any) {
        return res.status(400).send({ message: e });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = userService.createUser(req.body);
        return res.status(201).send(user);
    } catch (e: any) {
        return res.status(400).send({ message: e });
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = userService.getUser(req.params.id);
        return res.status(200).send(user);
    } catch (e: any) {
        return res.status(400).send({ message: e });
    }
};
