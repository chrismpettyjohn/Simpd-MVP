import {Directive, Field, ObjectType} from '@nestjs/graphql';
import {MediaType} from '@simpd/lib-client';

@ObjectType()
export class MediaDetailsModel {
  @Field(() => Number, {nullable: true})
  sizeInBytes!: number;

  @Field(() => String, {nullable: true})
  originalFileName!: string;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class MediaModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => MediaType, {nullable: true})
  type!: MediaType;

  @Field(() => Number, {nullable: true})
  profileID!: number;

  @Field(() => String, {nullable: true})
  url?: string;

  @Field(() => MediaDetailsModel, {nullable: true})
  details!: MediaDetailsModel;
}
