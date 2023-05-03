import {Directive, Field, ObjectType} from '@nestjs/graphql';
import {
  MediaDetails,
  MediaLocation,
  MediaWire as BaseMediaWire,
  MediaType,
} from '@simpd/lib-client';

@ObjectType()
export class MediaDetailsModel implements MediaDetails {
  @Field(() => Number, {nullable: true})
  sizeInBytes!: number;

  @Field(() => String, {nullable: true})
  originalFileName!: string;
}

@ObjectType()
export class MediaLocationModel implements MediaLocation {
  @Field(() => String, {nullable: true})
  awsS3Bucket!: string;

  @Field(() => String, {nullable: true})
  awsS3Key!: string;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class MediaModel implements BaseMediaWire {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => MediaType, {nullable: true})
  type!: MediaType;

  @Field(() => Number, {nullable: true})
  profileID!: number;

  @Field(() => MediaDetailsModel, {nullable: true})
  details!: MediaDetailsModel;

  @Field(() => MediaLocationModel, {nullable: true})
  location!: MediaLocationModel;
}
