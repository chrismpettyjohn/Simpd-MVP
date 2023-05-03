import {Controller} from '@nestjs/common';
import {FormPattern} from '@nestjs/microservices';
import {FormRepository} from './form.repository';
import {formEntityToFormWire} from './form.wire';
import {
  FormFindOneInput,
  FormWire,
  SVC_PROFILE_INTERNAL_EVENT_FIND_ONE_BY_ID,
} from '@simpd/lib-client';

@Controller()
export class FormController {
  constructor(private readonly formRepo: FormRepository) {}

  @FormPattern(SVC_PROFILE_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async formFindOneByID(data: FormFindOneInput): Promise<FormWire> {
    const matchingRole = await this.formRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return formEntityToFormWire(matchingRole);
  }
}
