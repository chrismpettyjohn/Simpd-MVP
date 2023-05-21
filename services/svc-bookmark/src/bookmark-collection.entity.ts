import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'bookmark_collections', schema: 'bookmarks'})
export class BookmarkEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column()
  name!: string;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}
