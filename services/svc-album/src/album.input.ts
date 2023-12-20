import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class AlbumFindOneInput {
  @Field(() => Number!)
  id!: number;
}

@InputType()
export class AlbumFindManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}

@InputType()
export class AlbumCreateInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;
}

@InputType()
export class AlbumUpdateInput implements Partial<AlbumCreateInput> {
  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => String, {nullable: true})
  description?: string;
}
