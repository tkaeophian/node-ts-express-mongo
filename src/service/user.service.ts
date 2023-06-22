import { User } from '../models/user.model';
import { CreateUserInput } from '../schema/user.schema';

export const getUsers = async (): Promise<Array<User>> => {
    return [];
};

export const createUser = async (payload: CreateUserInput): Promise<User> => {
    return new User();
};

export const getUser = async (id: number): Promise<User | null> => {
    // const user = new User();
    // return user;
    return null;
};
