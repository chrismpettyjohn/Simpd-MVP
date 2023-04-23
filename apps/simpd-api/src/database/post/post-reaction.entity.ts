import {PostEntity} from './post.entity';
import {UserEntity} from '../user/user.entity';
import {PostReactionType, Timestamp} from '@simpd/types';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity('post_reactions')
export class PostReactionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'post_id'})
  postID!: number;

  @ManyToOne(() => PostEntity)
  @JoinColumn({name: 'post_id'})
  post?: PostEntity;

  @Column()
  reaction!: PostReactionType;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: Timestamp;

  @Column({name: 'updated_at', type: 'timestamp'})
  updatedAt!: Timestamp;
}
