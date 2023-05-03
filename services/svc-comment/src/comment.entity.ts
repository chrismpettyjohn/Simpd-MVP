import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'comments', schema: 'comments'})
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({unique: true})
  @Index()
  key!: string;

  @Column()
  name!: string;

  @Column({type: 'text'})
  description!: string;
}
