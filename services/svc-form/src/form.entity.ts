import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'forms', schema: 'forms'})
export class FormEntity {
  @PrimaryGeneratedColumn()
  id?: number;
}
