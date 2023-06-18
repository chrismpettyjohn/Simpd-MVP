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
@Unique(['profileID', 'subscriptionGroupID'])
export class ProfileSubscriptionGroupEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id', type: 'integer'})
  @Index()
  profileID!: number;

  @Column({name: 'subscription_group_id', type: 'integer'})
  @Index()
  subscriptionGroupID!: number;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}
