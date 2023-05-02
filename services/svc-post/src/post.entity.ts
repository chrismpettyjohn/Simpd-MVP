import {PostType, PostWire} from '@simpd/lib-client';
import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'posts', schema: 'posts'})
export class PostEntity<PostData extends PostWire = PostWire> {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column({name: 'post_type', type: 'varchar'})
  @Index()
  postType!: PostType;

  @Column({name: 'post_data', type: 'json'})
  postData!: Omit<PostData, 'type' | 'profileID' | 'id'>;
}
