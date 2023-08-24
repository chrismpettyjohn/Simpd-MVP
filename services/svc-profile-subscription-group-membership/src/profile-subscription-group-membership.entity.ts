import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'profile_subscription_groups',
  schema: 'profile_subscription_groups',
})
export class ProfileSubscriptionGroupMembershipMembershipEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column({name: 'subscription_group_id'})
  @Index()
  subscriptionGroupID!: number;

  @Column({name: 'auto_renew', type: 'boolean', default: false})
  autoRenew!: boolean;

  @UpdateDateColumn({name: 'renews_on', type: 'timestamp'})
  renewsOn!: Date;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}
