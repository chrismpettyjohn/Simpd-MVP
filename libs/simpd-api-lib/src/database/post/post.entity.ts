import {UserEntity} from '../user/user.entity';
import {PostType, Timestamp} from '@simpd/types';
import {PostMediaEntity} from './post-media.entity';
import {PostChoiceEntity} from './post-choice.entity';
import {ProfileEntity} from '../profile/profile.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import {PostVoteEntity} from './post-vote.entity';
import {PostReactionEntity} from './post-reaction.entity';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.posts)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity[];

  @Column({name: 'profile_id'})
  profileID!: number;

  @ManyToOne(() => ProfileEntity, profile => profile.posts)
  @JoinColumn({name: 'profile_id'})
  profile?: ProfileEntity[];

  @Column()
  type!: PostType;

  @Column()
  content!: string;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: Timestamp;

  @Column({name: 'updated_at', type: 'timestamp'})
  updatedAt!: Timestamp;

  @OneToMany(() => PostMediaEntity, postMedia => postMedia.post)
  media?: PostMediaEntity[];

  @OneToMany(() => PostChoiceEntity, postChoice => postChoice.post)
  choices?: PostChoiceEntity[];

  @OneToMany(() => PostVoteEntity, postVote => postVote.post)
  votes?: PostVoteEntity[];

  @OneToMany(() => PostReactionEntity, postReaction => postReaction.post)
  reactions?: PostReactionEntity[];
}
