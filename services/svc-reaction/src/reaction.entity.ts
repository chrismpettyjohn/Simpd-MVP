import {ReactionType} from '@simpd/lib-client';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'reactions', schema: 'reactions'})
@Unique('uniq_reaction_per_resource', ['serviceKey', 'resourceID', 'profileID'])
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
}
