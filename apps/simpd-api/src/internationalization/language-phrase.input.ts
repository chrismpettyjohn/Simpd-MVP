import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { LanguagePhraseDTO, LanguagePhraseType } from '@simpd/types';

@InputType()
export class LanguagePhraseInput implements LanguagePhraseDTO {
  @Field(() => String)
  @IsNotEmpty()
  key!: string;

  @Field(() => LanguagePhraseType)
  @IsEnum(LanguagePhraseType)
  type!: LanguagePhraseType;

  @Field(() => String)
  @IsNotEmpty()
  description!: string;
}
