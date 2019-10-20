import { Logger } from '@nestjs/common';
import { BcryptService } from '../util/bcrypt/bcrypt.service';
import { DatabaseService } from '../database/database.service';
import { User } from './models/user';
export declare class UsersService {
    private bcryptService;
    private databaseService;
    private logger;
    constructor(bcryptService: BcryptService, databaseService: DatabaseService, logger: Logger);
    createUser(user: User): Promise<void>;
    login(username: string, password: string): Promise<any>;
}
