import { Logger } from '@nestjs/common';
import { Category } from './models/category';
import { DatabaseService } from '../database/database.service';
export declare class CategoriesService {
    private logger;
    private databaseService;
    constructor(logger: Logger, databaseService: DatabaseService);
    getCategories(): Promise<Category[]>;
    createCategory(category: Category): Promise<void>;
}
