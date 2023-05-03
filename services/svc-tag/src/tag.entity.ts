import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'tags', schema: 'tags'})
export class TagEntity {
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
