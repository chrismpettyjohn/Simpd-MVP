import {Timestamp} from '@simpd/types';
import {PostEntity} from './post.entity';
import {UserEntity} from '../user/user.entity';
import {PostChoiceEntity} from './post-choice.entity';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity('post_votes')
export class PostVoteEntity {
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

  @Column({name: 'post_choice_id'})
  postChoiceID!: number;

  @ManyToOne(() => PostChoiceEntity)
  @JoinColumn({name: 'post_choice_id'})
  postChoice?: PostChoiceEntity;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: Timestamp;
}
