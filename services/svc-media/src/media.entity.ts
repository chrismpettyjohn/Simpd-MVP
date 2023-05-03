import {MediaDetails, MediaLocation, MediaType} from '@simpd/lib-client';
import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'media', schema: 'media'})
export class MediaEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column({name: 'media_type', type: 'varchar'})
  @Index()
  mediaType!: MediaType;

  @Column({name: 'media_details', type: 'json'})
  mediaDetails!: MediaDetails;

  @Column({name: 'media_location', type: 'json'})
  mediaLocation!: MediaLocation;
}
