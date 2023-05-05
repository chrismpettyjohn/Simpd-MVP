import {ReactionType} from '@simpd/lib-client';
import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

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

  @Column({name: 'user_id'})
  @Index()
  userID!: number;

  @Column()
  reaction!: ReactionType;
}
