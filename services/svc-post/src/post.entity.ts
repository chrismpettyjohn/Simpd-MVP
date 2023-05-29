import {PostType, PostWire} from '@simpd/lib-client';
import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

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
}
