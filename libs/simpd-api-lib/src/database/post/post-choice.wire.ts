import {PostChoiceEntity} from './post-choice.entity';
import {InternalServerErrorException} from '@nestjs/common';
import {
  ErrorCode,
  PostChoiceWire,
  PostChoiceWithIndicatorWire,
} from '@simpd/types';

export function postChoiceWire(entity: PostChoiceEntity): PostChoiceWire {
  return {
    id: entity.id!,
    value: entity.value,
    label: entity.label,
    order: entity.order,
    isCorrect: undefined,
  };
}

export function postChoiceWithIndicatorWire(
  entity: PostChoiceEntity
): PostChoiceWithIndicatorWire {
  if (entity.correct === undefined) {
    throw new InternalServerErrorException(
      ErrorCode.PostChoiceWithIndicatorMissingCorrectField
    );
  }

  return {
    id: entity.id!,
    value: entity.value,
    label: entity.label,
    order: entity.order,
    isCorrect: entity.correct,
  };
}
