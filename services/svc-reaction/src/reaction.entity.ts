import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'reactions', schema: 'reactions'})
export class ReactionEntity {
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
