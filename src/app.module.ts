import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseService } from './database/database.service';
import { BudgetModule } from './budget/budget.module';
import { UsersModule } from './users/users.module';
import { BcryptService } from './util/bcrypt/bcrypt.service';

@Module({
  imports: [TransactionsModule, CategoriesModule, BudgetModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService, BcryptService],
})
export class AppModule {}
