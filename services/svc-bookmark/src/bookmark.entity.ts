import {BookmarkType} from '@simpd/lib-client';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'bookmarks', schema: 'bookmarks'})
@Unique('uniq_bookmark_resource', [
  'type',
  'resourceID',
  'profileID',
  'bookmarkCollectionID',
])
@Index(['type', 'resourceID', 'profileID', 'bookmarkCollectionID'])
export class BookmarkEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  type!: BookmarkType;

  @Column({name: 'resource_id'})
  @Index()
  resourceID!: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column({name: 'bookmark_collection_id'})
  @Index()
  bookmarkCollectionID!: number;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}