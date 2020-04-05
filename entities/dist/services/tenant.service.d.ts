import { Connection } from 'typeorm';
import { ClientConnectionConfig, TenantConfig } from '../interfaces';
export declare class TenantService {
    private clientName;
    private config;
    private httpService;
    private createConnection;
    private getConnectionManager;
    private getConnection;
    constructor(Config: TenantConfig);
    getCurrntConnection(): Promise<Connection>;
    findConnection(): Promise<ClientConnectionConfig>;
}
