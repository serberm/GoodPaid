import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';
import { GoodPaidBaseEntity } from '../../common/entities/base.entity';
import { Point } from 'geojson';

@Entity()
export class ZipCode extends GoodPaidBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  code: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Index({ spatial: true })
  @Column('geometry', { spatialFeatureType: 'Point' })
  coordinates: Point;
}
