import {RoleEntity} from '../role/role.entity';
import {PostEntity} from '../post/post.entity';
import {ProfileEntity} from '../profile/profile.entity';
import {SessionEntity} from '../session/session.entity';
import {ActivityEntity} from '../activity/activity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({unique: true})
  email!: string;

  @Column({name: 'hashed_password'})
  hashedPassword!: string;

  @Column({name: 'role_id'})
  roleID!: number;

  @ManyToOne(() => RoleEntity, role => role.users)
  @JoinColumn({name: 'role_id'})
  role?: RoleEntity;

  @OneToMany(() => SessionEntity, session => session.user)
  sessions?: SessionEntity[];

  @OneToMany(() => ActivityEntity, activity => activity.user)
  activity?: ActivityEntity[];

  @OneToMany(() => ProfileEntity, profile => profile.user)
  profiles?: ProfileEntity[];

  @OneToMany(() => PostEntity, post => post.profile)
  posts?: PostEntity[];
}
