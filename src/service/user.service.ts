import { CreateUserInput } from '../schema/user.schema';
import { User } from '../models/user.model';
import log from '../utils/logger';

class UserService {
    public async getUsers(): Promise<Array<User>> {
        return [];
    }

    public async createUser(payload: CreateUserInput): Promise<User> {
        return new User();
    }

    public async getUser(id: string | null): Promise<User | null> {
        let user = new User();
        return user;
    }
}

export default UserService;
