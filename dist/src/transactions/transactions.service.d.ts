import { Logger } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
export declare class TransactionsService {
    private logger;
    private databaseService;
    constructor(logger: Logger, databaseService: DatabaseService);
    createTransaction(transaction: any): Promise<void>;
    getTransactions(): Promise<any[]>;
}
