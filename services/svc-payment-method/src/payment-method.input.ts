import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class PaymentMethodFindOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;
}

@InputType()
export class PaymentMethodFindManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];
}
