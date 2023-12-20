import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class AlbumModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  profileID!: number;

  @Field(() => String, {nullable: true})
  name!: string;

  @Field(() => String, {nullable: true})
  description!: string;

  @Field(() => String, {nullable: true})
  createdAt!: string;

  @Field(() => String, {nullable: true})
  updatedAt!: string;
}
