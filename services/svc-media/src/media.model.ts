import {Directive, Field, InterfaceType, ObjectType} from '@nestjs/graphql';

@InterfaceType()
@Directive('@key(fields: "id")')
export class BaseMediaModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: string; // TODO: Add Privacy Guard
}

@ObjectType()
export class MediaWithTextModel extends BaseMediaModel {
  @Field(() => String, {nullable: true})
  content?: string;
}
