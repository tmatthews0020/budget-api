import { Logger, BadRequestException } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './models/category';
export declare class CategoriesController {
    private logger;
    private categoriesService;
    constructor(logger: Logger, categoriesService: CategoriesService);
    getCategories(): Promise<Category[]>;
    createCategory(category: Category): Promise<BadRequestException>;
}
