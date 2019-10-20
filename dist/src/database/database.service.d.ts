import { MongoClient } from 'mongodb';
export declare class DatabaseService {
    getClient(): Promise<MongoClient>;
}
