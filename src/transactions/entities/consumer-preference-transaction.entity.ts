import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategorizedTransaction } from './categorized-transaction.entity';
import { User } from 'src/users/entities/user.entity';
import { GoodPaidBaseEntity } from 'src/common/entities/base.entity';

@Entity()
export class ConsumerPreferenceTransaction extends GoodPaidBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => User)
  user: User;

  @OneToOne(() => CategorizedTransaction)
  @JoinColumn()
  transaction: CategorizedTransaction;

  @Column()
  isIncome: boolean;
}
