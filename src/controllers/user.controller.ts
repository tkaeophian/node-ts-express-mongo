import { Get, Route, Tags, Post, Body, Path } from 'tsoa';
import { User } from '../models/user.model';
import { createUser, getUser, getUsers } from '../service/user.service';
import { CreateUserInput } from '../schema/user.schema';

@Route('users')
@Tags('User')
export default class UserController {
    @Get('/')
    public async getUsers(): Promise<Array<User>> {
        return await getUsers();
    }

    @Post('/')
    public async createUser(@Body() body: CreateUserInput): Promise<User> {
        return await createUser(body);
    }

    @Get('/:id')
    public async getUser(@Path() id: string): Promise<User | null> {
        return await getUser(Number(id));
    }
}
