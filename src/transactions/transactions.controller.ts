import { Controller, Post, Body, BadRequestException, Get } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {

    constructor(
        private transactionService: TransactionsService,
    ) {
    }

    @Get()
    async getTransactions() {
        return await this.transactionService.getTransactions();
    }

    @Post()
    async createTransaction(@Body() transaction: any) {

        if (!transaction) {
            throw new BadRequestException();
        }

        await this.transactionService.createTransaction(transaction);
    }
}
