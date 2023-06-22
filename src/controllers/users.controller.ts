import { Controller, Route, Get, Post, SuccessResponse, Body } from 'tsoa';
import UserService from '../service/user.service';
import { User } from '../models/user.model';
import { CreateUserInput } from '../schema/user.schema';

@Route('api/users')
export class UsersController extends Controller {
    userService = new UserService();

    @Get('/')
    public async getUsers(): Promise<Array<User>> {
        return this.userService.getUsers();
    }

    @Post('/')
    @SuccessResponse(201)
    public async createUser(@Body() body: CreateUserInput): Promise<User> {
        return this.userService.createUser(body);
    }

    @Get('/:id')
    public async getUser(id: string | null): Promise<User | null> {
        return this.userService.getUser(id);
    }
}
