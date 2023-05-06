import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'Privacys', schema: 'Privacys'})
export class PrivacyEntity {
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
