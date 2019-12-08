import { Controller, Logger, Get, Post, BadRequestException, LoggerService, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './models/category';

@Controller('categories')
export class CategoriesController {

    constructor(
        private logger: Logger,
        private categoriesService: CategoriesService) {

    }

    @Get()
    async getCategories() {
        return this.categoriesService.getCategories();
    }

    @Post()
    async createCategory(@Body() category: Category) {

        if (!category) {
            return new BadRequestException();
        }

        await this.categoriesService.createCategory(category);
    }
}
