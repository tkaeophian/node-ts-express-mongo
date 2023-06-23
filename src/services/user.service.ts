import { CreateUserInput } from '../schema/user.schema';
import { User } from '../models/user.model';

class UserService {
    public async getUsers(): Promise<Array<User>> {
        const users = [] as Array<User>;
        return new Promise<Array<User>>((resolve) => {
            resolve(users);
        });
    }

    public async createUser(payload: CreateUserInput): Promise<User> {
        const user = new User();
        user.firstName = payload.firstName;

        return new Promise<User>((resolve) => {
            resolve(user);
        });
    }

    public async getUser(id: string): Promise<User | null> {
        const user = new User();
        user.id = id;
        return new Promise<User>((resolve) => {
            resolve(user);
        });
    }
}

export default UserService;
