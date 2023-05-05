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

  @Column({name: 'user_id'})
  @Index()
  userID!: number;

  @Column({type: 'text'})
  comment!: string;
}
