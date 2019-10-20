import { Module, Logger } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { DatabaseService } from '../database/database.service';

@Module({
  providers: [CategoriesService, DatabaseService, Logger],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
