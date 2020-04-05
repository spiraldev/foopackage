import { BaseEntity } from '../entities/base.entity';
export declare class TenantEntity extends BaseEntity {
    name: string;
    databaseName: string;
    host: string;
    port: number;
    username: string;
    password: string;
}
