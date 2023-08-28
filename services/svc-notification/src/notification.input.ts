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

export interface NotificationCreateOneInput<EventMeta extends any> {
  resourceID: number;
  resourceType: string;
  profileID: number;
  eventKey: string;
  eventMetadata: EventMeta;
}
