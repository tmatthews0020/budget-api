import { Injectable } from '@nestjs/common';
import { mongoFactory } from '../main';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionsService {

    async createTransaction(transaction: any){
        const client = mongoFactory();
        await client.connect();
        console.log("creating transaction", transaction);

        client.db('budget').collection('transactions').insertOne(transaction)
        client.close();
    }

    async getTransactions(): Promise<any[]> {
        const client = mongoFactory();
        await client.connect();
        return client.db('budget')
            .collection('transactions')
            .find({})
            .toArray();
    }
}
