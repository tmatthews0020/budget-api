import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TransactionsService {

    constructor(
        private logger: Logger,
        private databaseService: DatabaseService,
    ) {

    }

    async createTransaction(transaction: any) {
        const client = await this.databaseService.getClient();
        await client.connect();
        this.logger.log('creating transaction');
        client.db('budget').collection('transactions').insertOne(transaction);
        client.close();
    }

    async getTransactions(): Promise<any[]> {
        const client = await this.databaseService.getClient();
        await client.connect();
        const transactions =  client.db('budget')
            .collection('transactions')
            .find({})
            .toArray();

        await client.close();
        return transactions;
    }
}
