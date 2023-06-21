import { User } from '../models/user';

export interface IUserPayload {
    firstName: string;
    lastName: string;
    email: string;
}

export const getUsers = async (): Promise<Array<User>> => {
    return [];
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
    const user = new User();
    return user;
};

export const getUser = async (id: number): Promise<User | null> => {
    const user = new User();
    return user;
};
