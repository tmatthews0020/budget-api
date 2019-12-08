import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { BcryptService } from '../util/bcrypt/bcrypt.service';
import { DatabaseService } from '../database/database.service';
import { User } from './models/user';

@Injectable()
export class UsersService {
    constructor(
        private bcryptService: BcryptService,
        private databaseService: DatabaseService,
        private logger: Logger,
    ) {

    }

    async createUser(user: User) {
        try {

            const client = await this.databaseService.getClient();

            user.password = await this.bcryptService.hashPassword(user.password);

            await client.connect();
            await client
            .db('budget')
            .collection('users')
            .insertOne(user);

            await client.close();
        } catch (err) {
            this.logger.error(err.message);
        }
    }

    async login(username: string, password: string): Promise<User> {

        return new Promise(async (resolve, reject ) => {
            try {
                const client = await this.databaseService.getClient();

                await client.connect();
                const user = await client
                .db('budget')
                .collection('users')
                .findOne({
                    username,
                }, async (err, u) => {

                    if (err) {
                        this.logger.error(err.message);
                        await client.close();
                        return reject(err.message);
                    }

                    if (!u) {
                        return reject('User not found');
                    }

                    const match = await this.bcryptService.compare(password, u.password);

                    if (match) {
                        delete u.password;
                        return resolve(u);
                    } else {
                        return reject(new BadRequestException());
                    }
                });
            } catch (err) {
                this.logger.error(err.message);
                return reject();
            }
        });
    }
}
