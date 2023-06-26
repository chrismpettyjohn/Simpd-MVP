import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'profiles_subscription_groups', schema: 'profiles'})
export class ProfileSubscriptionGroupMembershipMembershipEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column({name: 'subscription_group_id'})
  @Index()
  subscriptionGroupID!: number;

  @UpdateDateColumn({name: 'auto_new', type: 'boolean'})
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
