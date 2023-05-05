import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'comments', schema: 'comments'})
export class CommentEntity {
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

  @Column({type: 'text'})
  comment!: string;
}
