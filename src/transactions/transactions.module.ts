import { Module, Logger } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { DatabaseService } from '../database/database.service';

@Module({
  providers: [TransactionsService, Logger, DatabaseService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
