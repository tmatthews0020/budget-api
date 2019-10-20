import { Injectable, Logger, Get } from '@nestjs/common';
import { Category } from './models/category';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CategoriesService {

    constructor(
        private logger: Logger,
        private databaseService: DatabaseService,
    ) {

    }
    /*
        get all categories
    */
    async getCategories(): Promise<Category[]> {
        const client = await this.databaseService.getClient();
        await client.connect();
        const categories =  await client.db('budget')
        .collection('categories')
        .find({})
        .toArray();

        await client.close();
        return categories;
    }
    /*
    *   create a category
    *   @param {Category} category
    */
    async createCategory(category: Category) {
        try {

            const client = await this.databaseService.getClient();

            await client.connect();
            await client.db('budget')
                .collection('categories')
                .insertOne(category);
            await client.close();

        } catch (err) {
            this.logger.error(err.message);
            return;
        }
    }
}
