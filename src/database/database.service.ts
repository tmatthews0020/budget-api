import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class DatabaseService {
    async getClient(): Promise<MongoClient> {
        return new Promise((resolve, reject) => {
            try {
                resolve(new MongoClient(
                    `mongodb://${encodeURIComponent(process.env.MONGO_USERNAME)}`
                    + `:${encodeURIComponent(process.env.MONGO_PASSWORD)}@${process.env.MONGO_HOST}:27017/?authMechanism=DEFAULT`,
                ));

            } catch (err) {
                reject(err.message);
            }
        });
    }
}
