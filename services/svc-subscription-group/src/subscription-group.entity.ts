import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'subscriptionGroups', schema: 'subscriptionGroups'})
export class SubscriptionGroupEntity {
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
