import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class GoodPaidBaseEntity extends BaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
