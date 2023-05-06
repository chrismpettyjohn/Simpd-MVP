import { PrivacyPolicy } from '@simpd/lib-client';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'privacy_policies', schema: 'privacy' })
export class PrivacyPolicyEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'resource_id' })
  @Index()
  resourceID!: number;

  @Column()
  name!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'json' })
  policy!: PrivacyPolicy;
}
