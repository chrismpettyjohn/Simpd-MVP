import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'subscription-groups', schema: 'subscription-groups'})
export class SubscriptionGroupEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column()
  name!: string;

  @Column({type: 'text'})
  description!: string;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}
