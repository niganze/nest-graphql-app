import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  fullname: string;

  @Field()
  email: string;

  @Field()
  telephone: string;

  @Field()
  password: string;
}
