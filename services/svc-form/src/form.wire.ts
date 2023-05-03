import {FormWire} from '@simpd/lib-client';
import {FormEntity} from './form.entity';

export function formEntityToFormWire(formEntity: FormEntity): FormWire {
  return {
    id: formEntity.id!,
  };
}
