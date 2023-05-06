import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'users', schema: 'users'})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({unique: true})
  email!: string;

  @Column({name: 'hashed_password'})
  hashedPassword!: string;

  @Column({name: 'role_id'})
  roleID!: number;
}
