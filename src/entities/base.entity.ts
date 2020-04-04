import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
/*
 **-------------------------------------------------------------------------------------
 ** Entity - Base
 **-------------------------------------------------------------------------------------
 */
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @Column({ type: 'integer', default: 1 })
  createdBy: number | null;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  modifiedAt: Date | null;

  @Column({ type: 'integer', default: 1 })
  modifiedBy: number | null;
}
