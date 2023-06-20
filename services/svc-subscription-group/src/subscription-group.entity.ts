import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'subscription-groups', schema: 'subscription-groups'})
@Unique(['serviceKey', 'resourceID'])
export class SubscriptionGroupEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'service_key'})
  @Index()
  serviceKey!: string;

  @Column({name: 'resource_id', type: 'integer'})
  @Index()
  resourceID!: number;

  @Column()
  name!: string;

  @Column({type: 'text'})
  description!: string;

  @Column({name: 'monthly_cost_in_cents', type: 'bigint'})
  monthlyCostInCents!: number;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}
