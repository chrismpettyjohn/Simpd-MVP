import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'messages', schema: 'messages'})
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id?: number;
}
