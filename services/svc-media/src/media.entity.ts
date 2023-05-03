import {MediaType, MediaWire} from '@simpd/lib-client';
import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'medias', schema: 'medias'})
export class MediaEntity<MediaData extends MediaWire = MediaWire> {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id'})
  @Index()
  profileID!: number;

  @Column({name: 'media_type', type: 'varchar'})
  @Index()
  mediaType!: MediaType;

  @Column({name: 'media_data', type: 'json'})
  mediaData!: Omit<MediaData, 'type' | 'profileID' | 'id'>;
}
