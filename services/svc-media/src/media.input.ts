import {Field, InputType} from '@nestjs/graphql';
import {
  MediaImageInput as BaseMediaImageInput,
  MediaDetails,
  MediaLocation,
  MediaType,
} from '@simpd/lib-client';

@InputType()
export class MediaFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}

@InputType()
export class MediaFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;
}

@InputType()
export class MediaDetailsInput implements MediaDetails {
  @Field(() => Number)
  sizeInBytes!: number;

  @Field(() => String)
  originalFileName!: string;
}

@InputType()
export class MediaLocationInput implements MediaLocation {
  @Field(() => String)
  awsS3Bucket!: string;

  @Field(() => String)
  awsS3Key!: string;
}

@InputType()
export class MediaCreateInput implements BaseMediaImageInput {
  @Field(() => MediaType)
  type!: MediaType;

  @Field(() => Number)
  profileID!: number;

  @Field(() => MediaDetailsInput)
  details!: MediaDetailsInput;

  @Field(() => MediaLocationInput)
  location!: MediaLocationInput;
}
