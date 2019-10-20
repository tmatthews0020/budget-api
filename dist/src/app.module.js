"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const transactions_module_1 = require("./transactions/transactions.module");
const categories_module_1 = require("./categories/categories.module");
const database_service_1 = require("./database/database.service");
const budget_module_1 = require("./budget/budget.module");
const users_module_1 = require("./users/users.module");
const bcrypt_service_1 = require("./util/bcrypt/bcrypt.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [transactions_module_1.TransactionsModule, categories_module_1.CategoriesModule, budget_module_1.BudgetModule, users_module_1.UsersModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, database_service_1.DatabaseService, bcrypt_service_1.BcryptService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map