import {Field, InputType} from '@nestjs/graphql';
import {MediaDetails} from '@simpd/lib-client';

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
export class MediaCreateInput {
  @Field(() => Number)
  profileID!: number;
}
