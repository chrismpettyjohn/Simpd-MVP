import {Field, InterfaceType, ObjectType} from '@nestjs/graphql';

@InterfaceType()
export class BasePostModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: string; // TODO: Add Privacy Guard
}

@ObjectType()
export class PostWithTextModel extends BasePostModel {
  @Field(() => String, {nullable: true})
  content?: string;
}
