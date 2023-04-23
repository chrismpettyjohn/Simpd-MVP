import {Timestamp} from '@simpd/types';
import {UserEntity} from '../user/user.entity';
import {ProfileEntity} from '../profile/profile.entity';
import {ActivityEntity} from '../activity/activity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sessions')
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.sessions)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'profile_id', type: 'int'})
  profileID!: number;

  @ManyToOne(() => ProfileEntity, profile => profile.sessions)
  @JoinColumn({name: 'profile_id'})
  profile?: ProfileEntity;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: Timestamp;

  @Column({name: 'ended_at', type: 'timestamp'})
  endedAt!: Timestamp;

  @Column({name: 'ip_address'})
  ipAddress!: string;

  @Column({name: 'geo_location'})
  geoLocation!: string;

  @Column({name: 'operating_system'})
  operatingSystem!: string;

  @OneToMany(() => ActivityEntity, activity => activity.session)
  activity?: ActivityEntity[];
}
