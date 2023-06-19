import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'tips', schema: 'tips'})
export class TipEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  @Index()
  userID!: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column({name: 'receiving_user_id'})
  @Index()
  receivingUserID!: number;

  @Column({name: 'receiving_profile_id'})
  @Index()
  receivingProfileID!: number;

  @Column({name: 'payment_invoice_id'})
  paymentInvoiceID!: number;

  @Column({type: 'text'})
  message!: string;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}
