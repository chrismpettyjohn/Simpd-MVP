import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'posts', schema: 'posts'})
export class PostEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  @Index()
  userID!: number;
}
