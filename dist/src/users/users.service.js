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
const bcrypt_service_1 = require("../util/bcrypt/bcrypt.service");
const database_service_1 = require("../database/database.service");
let UsersService = class UsersService {
    constructor(bcryptService, databaseService, logger) {
        this.bcryptService = bcryptService;
        this.databaseService = databaseService;
        this.logger = logger;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield this.databaseService.getClient();
                user.password = yield this.bcryptService.hashPassword(user.password);
                yield client.connect();
                yield client
                    .db('budget')
                    .collection('users')
                    .insertOne(user);
                yield client.close();
            }
            catch (err) {
                this.logger.error(err.message);
            }
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield this.databaseService.getClient();
                yield client.connect();
                const user = yield client
                    .db('budget')
                    .collection('users')
                    .find({
                    userName: username,
                });
                yield client.close();
                const match = yield this.bcryptService.compare(password, user.password);
                if (match) {
                    delete user.password;
                    return user;
                }
                else {
                    return new common_1.BadRequestException('Unable to login');
                }
            }
            catch (err) {
                this.logger.error(err.message);
            }
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [bcrypt_service_1.BcryptService,
        database_service_1.DatabaseService,
        common_1.Logger])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map