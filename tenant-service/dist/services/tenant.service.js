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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cf_encrypt_1 = require("cf-encrypt");
const utility_service_1 = require("./utility.service");
let TenantService = class TenantService {
    constructor(Config) {
        this.clientName = 'default';
        this.httpService = new common_1.HttpService();
        this.config = Config;
        this.clientName = Config.name;
        this.createConnection = Config.typeormRef.createConnection;
        this.getConnectionManager = Config.typeormRef.getConnectionManager;
        this.getConnection = Config.typeormRef.getConnection;
    }
    getCurrntConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!this.getConnectionManager().has(this.clientName)) {
                        const clientConnectionOptions = yield this.findConnection();
                        yield this.createConnection(Object.assign(Object.assign({}, clientConnectionOptions), { type: 'postgres', synchronize: true, logging: false, entities: [
                                '/src/entities/**.entity{.ts,.js}',
                                'dist/entities/*.entity{.ts,.js}',
                            ] }));
                    }
                    resolve(this.getConnection(this.clientName));
                }
                catch (err) {
                    console.log('err');
                    console.log(err);
                    resolve(err);
                }
            }));
        });
    }
    findConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.httpService
                .get(`${this.config.APIURL}/${this.config.name}/${this.config.environment}/${this.config.product}`)
                .toPromise();
            const connectionConfig = utility_service_1.first(resp.data.payload);
            connectionConfig.password = cf_encrypt_1.decrypt(connectionConfig.password, this.config.dsnPrivateEncryptionKey, '');
            return connectionConfig;
        });
    }
};
TenantService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('TENANT_CONFIG')),
    __metadata("design:paramtypes", [Object])
], TenantService);
exports.TenantService = TenantService;
