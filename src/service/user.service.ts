import { Body, Get, Post, Route, SuccessResponse } from 'tsoa';
import { User } from '../models/user.model';
import { CreateUserInput } from '../schema/user.schema';
import log from '../utils/logger';

@Route('api/users')
class UserService {
    @Get('/')
    public async getUsers(): Promise<Array<User>> {
        return [];
    }

    @Post('/')
    @SuccessResponse(201)
    public async createUser(@Body() body: CreateUserInput): Promise<User> {
        return new User();
    }

    @Get('/:id')
    public async getUser(id: string | null): Promise<User | null> {
        log.info('User id', id);
        return null;
    }
}

export default UserService;
