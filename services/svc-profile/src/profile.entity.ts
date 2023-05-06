import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'profiles', schema: 'profiles'})
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @Column({unique: true})
  @Index()
  username!: string;

  @Column({name: 'subscription_group_ids', type: 'json', default: []})
  subscriptionGroupIDs!: number[];
}
