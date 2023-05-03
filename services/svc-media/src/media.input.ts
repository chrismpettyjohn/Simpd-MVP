import {Field, InputType} from '@nestjs/graphql';

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
export class MediaWithTextCreateInput {
  @Field(() => String)
  content!: string;

  @Field(() => Number)
  profileID!: number;
}
