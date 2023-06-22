import { User } from '../models/user.model';

export interface IUserPayload {
    firstName: string;
    lastName: string;
    email: string;
}

export const getUsers = async (): Promise<Array<User>> => {
    return [];
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
    // const user = new User();
    // return user;
    return new User();
};

export const getUser = async (id: number): Promise<User | null> => {
    // const user = new User();
    // return user;
    return null;
};
