import {PostEntity} from './post.entity';
import {MediaEntity} from '../media/media.entity';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity('post_media')
export class PostMediaEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'post_id'})
  postID!: number;

  @ManyToOne(() => PostEntity, post => post.media)
  @JoinColumn({name: 'post_id'})
  post?: PostEntity;

  @Column({name: 'media_id'})
  mediaID!: number;

  @ManyToOne(() => MediaEntity)
  @JoinColumn({name: 'media_id'})
  media?: MediaEntity;

  @Column({type: 'int'})
  order!: number;
}
