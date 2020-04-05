import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../entities/base.entity';
/*
 **-------------------------------------------------------------------------------------
 ** Entity - Base
 **-------------------------------------------------------------------------------------
 */
@Entity({ name: 'tenant' })
export class TenantEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  databaseName: string;

  @Column({ type: 'varchar', length: 300 })
  host: string;

  @Column()
  port: number;

  @Column({ type: 'varchar', length: 300 })
  username: string;

  @Column({ type: 'varchar', length: 300 })
  password: string;
}
