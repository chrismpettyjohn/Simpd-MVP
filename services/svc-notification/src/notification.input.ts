import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class NotificationFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => Number, {nullable: true})
  receivingProfileID?: number;
}

@InputType()
export class NotificationFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;
}

@InputType()
export class NotificationCreateInput {
  @Field(() => Number)
  receivingProfileID!: number;

  @Field(() => String)
  content!: string;
}
