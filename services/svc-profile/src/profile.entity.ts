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

  @Column({name: 'display_name'})
  displayName!: string;

  @Column({name: 'biography', type: 'text'})
  biography!: string;

  @Column({name: 'website_url'})
  websiteURL!: string;

  @Column({name: 'wishlist_url'})
  wishlistURL!: string;

  @Column({name: 'subscription_group_ids', type: 'json', default: []})
  subscriptionGroupIDs!: number[];
}
