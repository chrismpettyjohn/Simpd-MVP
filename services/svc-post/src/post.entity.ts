import {PostType, PostWire} from '@simpd/lib-client';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'posts', schema: 'posts'})
export class PostEntity<
  Data extends PostWire = PostWire,
  Type extends PostType = PostType
> {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column({name: 'post_type', type: 'varchar'})
  @Index()
  postType!: Type;

  @Column({name: 'post_data', type: 'json'})
  postData!: Omit<Data, 'type' | 'profileID' | 'id' | 'profile' | 'tagIDs'>;

  @Column({name: 'tag_ids', type: 'json', default: []})
  tagIDs!: number[];

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}
