import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { GoodPaidBaseEntity } from '../../common/entities/base.entity';
import { Merchant } from './merchant.entity';
import { ZipCode } from './zip-code.entity';

@Entity()
export class MerchantZipCode extends GoodPaidBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Merchant)
  @JoinColumn()
  merchant: Merchant;

  @ManyToOne(() => ZipCode)
  @JoinColumn()
  zipCode: ZipCode;

  @Column()
  uniqueUsers: number;
}
