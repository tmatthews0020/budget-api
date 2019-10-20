"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let TransactionsService = class TransactionsService {
    constructor(logger, databaseService) {
        this.logger = logger;
        this.databaseService = databaseService;
    }
    createTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.databaseService.getClient();
            yield client.connect();
            this.logger.log('creating transaction');
            client.db('budget').collection('transactions').insertOne(transaction);
            client.close();
        });
    }
    getTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.databaseService.getClient();
            yield client.connect();
            const transactions = client.db('budget')
                .collection('transactions')
                .find({})
                .toArray();
            yield client.close();
            return transactions;
        });
    }
};
TransactionsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.Logger,
        database_service_1.DatabaseService])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map