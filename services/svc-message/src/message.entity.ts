import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'messages', schema: 'messages'})
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'sending_profile_id'})
  @Index()
  sendingProfileID!: number;

  @Column({name: 'receiving_profile_id'})
  @Index()
  receivingProfileID!: number;

  @Column({type: 'text'})
  content!: string;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}
