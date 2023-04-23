import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { LanguagePhraseTranslationDTO } from '@simpd/types';

@InputType()
export class LanguagePhraseTranslationInput
  implements LanguagePhraseTranslationDTO {
  @Field(() => Number)
  @IsNumber()
  languageID!: number;

  @Field(() => Number)
  @IsNumber()
  languagePhraseID!: number;

  @Field(() => String)
  @IsNotEmpty()
  translation!: string;
}
