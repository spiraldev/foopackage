import { Connection } from 'typeorm';
import { Injectable, Inject, HttpService } from '@nestjs/common';
import { encrypt, decrypt } from 'cf-encrypt';
import {
  ClientConnectionConfig,
  ClientPayloadData,
  ClientPayload,
  TenantConfig,
} from '../interfaces';
import { first } from './utility.service';

@Injectable()
export class TenantService {
  private clientName: string = 'default';
  private config: TenantConfig;
  private httpService = new HttpService();
  //TypeORM
  private createConnection;
  private getConnectionManager;
  private getConnection;

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(@Inject('TENANT_CONFIG') Config: TenantConfig) {
    this.config = Config;
    this.clientName = Config.name;
    this.createConnection = Config.typeormRef.createConnection;
    this.getConnectionManager = Config.typeormRef.getConnectionManager;
    this.getConnection = Config.typeormRef.getConnection;
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - getConnection
   **-------------------------------------------------------------------------------------
   */
  public async getCurrntConnection(): Promise<Connection> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.getConnectionManager().has(this.clientName)) {
          const clientConnectionOptions = await this.findConnection();

          await this.createConnection({
            ...clientConnectionOptions,
            type: 'postgres',
            synchronize: true,
            logging: false,
            entities: [
              '/src/entities/**.entity{.ts,.js}',
              'dist/entities/*.entity{.ts,.js}',
            ],
          });
        }
        resolve(this.getConnection(this.clientName));
      } catch (err) {
        console.log('err');
        console.log(err);
        resolve(err);
      }
    });
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findConnection
   **-------------------------------------------------------------------------------------
   */
  public async findConnection(): Promise<ClientConnectionConfig> {
    const resp: ClientPayload = await this.httpService
      .get(
        `${this.config.APIURL}/${this.config.name}/${this.config.environment}/${this.config.product}`,
      )
      .toPromise();

    const connectionConfig: ClientConnectionConfig = first(resp.data.payload);

    connectionConfig.password = decrypt(
      connectionConfig.password,
      this.config.dsnPrivateEncryptionKey,
      '',
    );

    return connectionConfig;
  }
}
