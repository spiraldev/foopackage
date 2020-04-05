export interface ClientConnectionConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  name: string;
}
export interface ClientPayloadData {
  payload: ClientConnectionConfig[];
  success: boolean;
  timestamp: Date;
}
export interface ClientPayload {
  data: ClientPayloadData;
}

export interface TenantConfig {
  name: string;
  APIURL: string;
  environment: string;
  product: string;
  dsnPrivateEncryptionKey: string;
  typeormRef: any;
}
