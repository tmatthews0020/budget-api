import { UsersService } from './users.service';
import { User } from './models/user';
import { Login } from './models/login';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    login(login: Login): Promise<User>;
    createUser(user: User): Promise<void>;
}
