import { Module, Logger } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { BcryptService } from '../util/bcrypt/bcrypt.service';
import { DatabaseService } from '../database/database.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, BcryptService, DatabaseService, Logger],
})
export class UsersModule {}
