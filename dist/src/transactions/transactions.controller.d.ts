import { TransactionsService } from './transactions.service';
export declare class TransactionsController {
    private transactionService;
    constructor(transactionService: TransactionsService);
    getTransactions(): Promise<any[]>;
    createTransaction(transaction: any): Promise<void>;
}
