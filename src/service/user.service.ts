import { CreateUserInput } from '../schema/user.schema';
import { User } from '../models/user.model';
import log from '../utils/logger';

class UserService {
    public async getUsers(): Promise<Array<User>> {
        const users = [] as Array<User>;
        return new Promise<Array<User>>((resolve) => {
            resolve(users);
        });
    }

    public async createUser(payload: CreateUserInput): Promise<User> {
        log.info(payload);
        return new Promise<User>((resolve) => {
            resolve(new User());
        });
    }

    public async getUser(id: string | null): Promise<User | null> {
        log.info(id);

        return new Promise<User>((resolve) => {
            resolve(new User());
        });
    }
}

export default UserService;
