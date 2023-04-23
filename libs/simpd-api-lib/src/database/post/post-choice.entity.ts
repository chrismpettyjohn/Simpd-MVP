import {PostEntity} from './post.entity';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity('post_choices')
export class PostChoiceEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'post_id'})
  postID!: number;

  @ManyToOne(() => PostEntity, post => post.media)
  @JoinColumn({name: 'post_id'})
  post?: PostEntity;

  @Column()
  label!: string;

  @Column()
  value!: string;

  @Column({name: 'is_correct', type: 'boolean', nullable: true})
  correct?: boolean;

  @Column({type: 'int'})
  order!: number;
}
