import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './models/user';
import { Login } from './models/login';

@Controller('users')
export class UsersController {

    constructor(
        private userService: UsersService,
    ) {

    }

    @Post('login')
    async login(
        @Body() login: Login,
    ): Promise<User> {
        const user = await this.userService.login(login.username, login.password);
        return user;
    }

    @Post('')
    async createUser(
        @Body() user: User,
    ) {
        await this.userService.createUser(user);
    }
}
