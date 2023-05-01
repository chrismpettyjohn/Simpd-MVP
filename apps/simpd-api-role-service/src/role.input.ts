import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class RoleFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];
}

@InputType()
export class RoleFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;
}

@InputType()
export class RoleCreateInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;
}

@InputType()
export class RoleUpdateInput {
  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => String, {nullable: true})
  description?: string;
}
