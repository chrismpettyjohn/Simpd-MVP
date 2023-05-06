import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'subscription-groups', schema: 'subscription-groups'})
export class SubscriptionGroupEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column()
  name!: string;

  @Column({type: 'text'})
  description!: string;
}
