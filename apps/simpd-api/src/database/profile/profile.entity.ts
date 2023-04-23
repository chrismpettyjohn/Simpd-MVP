import {UserEntity} from '../user/user.entity';
import {PostEntity} from '../post/post.entity';
import {MediaEntity} from '../media/media.entity';
import {ProfileType, Timestamp} from '@simpd/types';
import {SessionEntity} from '../session/session.entity';
import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('profiles')
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.activity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column()
  username!: string;

  @Column({name: 'profile_picture_id'})
  profilePictureID?: number;

  @ManyToOne(() => MediaEntity)
  @JoinColumn({name: 'profile_picture_id'})
  profilePicture?: MediaEntity;

  @Column({name: 'cover_picture_id'})
  coverPictureID?: number;

  @ManyToOne(() => MediaEntity)
  @JoinColumn({name: 'cover_picture_id'})
  coverPicture?: MediaEntity;

  @Column({name: 'display_name'})
  displayName!: string;

  @Column()
  biography!: string;

  @Column()
  location!: string;

  @Column({name: 'website_url'})
  websiteURL!: string;

  @Column()
  type!: ProfileType;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt?: Timestamp;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt?: Timestamp;

  @UpdateDateColumn({name: 'last_online_at', type: 'timestamp'})
  lastOnlineAt?: Timestamp;

  @OneToMany(() => PostEntity, post => post.profile)
  posts?: PostEntity[];

  @OneToMany(() => SessionEntity, session => session.profile)
  sessions?: SessionEntity[];
}
