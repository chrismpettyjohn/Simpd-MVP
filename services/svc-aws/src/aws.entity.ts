import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'awss', schema: 'awss' })
export class AWSEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id' })
  userID!: number;

  @Column({ unique: true })
  @Index()
  username!: string;
}
