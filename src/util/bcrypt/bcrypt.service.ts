import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
    saltRounds = 13;

    async hashPassword(password: string): Promise<string> {
       return bcrypt.hash(password, this.saltRounds);
    }

    compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}
