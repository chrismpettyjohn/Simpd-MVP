import {ReactionType} from '@simpd/lib-client';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'reactions', schema: 'reactions'})
export class ReactionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'service_key'})
  @Index()
  serviceKey!: string;

  @Column({name: 'resource_id'})
  @Index()
  resourceID!: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column()
  reaction!: ReactionType;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}
