import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reports', schema: 'reports' })
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  @Index()
  key!: string;

  @Column()
  name!: string;

  @Column({ type: 'text' })
  description!: string;
}
