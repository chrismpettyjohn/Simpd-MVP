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

  @Column({type: 'text', default: ''})
  biography!: string;

  @Column({default: ''})
  location!: string;

  @Column({name: 'website_url', default: ''})
  websiteURL!: string;

  @Column({name: 'wishlist_url', default: ''})
  wishlistURL!: string;

  @Column({name: 'profile_picture_media_id', nullable: true})
  profilePictureMediaID?: number;

  @Column({name: 'cover_photo_media_id', nullable: true})
  coverPhotoMediaID?: number;

  @Column({name: 'subscription_group_ids', type: 'json', default: []})
  subscriptionGroupIDs!: number[];
}
