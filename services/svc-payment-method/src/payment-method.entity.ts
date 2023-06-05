import {
  PaymentMethodBillingAddressWire,
  PaymentMethodCardDetailsWire,
  PaymentMethodProviderDetails,
  PaymentProvider,
} from '@simpd/lib-client';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({name: 'payment_methods', schema: 'payment-methods'})
export class PaymentMethodEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  @Index()
  userID!: number;

  @Column({name: 'billing_address', type: 'json'})
  billingAddress!: PaymentMethodBillingAddressWire;

  @Column({name: 'card_details', type: 'json'})
  cardDetails!: PaymentMethodCardDetailsWire;

  @Column({type: 'varchar'})
  provider!: PaymentProvider;

  @Column({name: 'provider__details', type: 'json'})
  providerDetails!: PaymentMethodProviderDetails;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Date;

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamp'})
  deletedAt?: Date;
}
