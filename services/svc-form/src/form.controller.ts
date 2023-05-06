import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {FormRepository} from './form.repository';
import {formEntityToFormWire} from './form.wire';
import {
  FormFindOneInput,
  FormWire,
  SVC_FORM_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class FormController {
  constructor(private readonly formRepo: FormRepository) {}

  @MessagePattern(SVC_FORM_INTERNAL_EVENT_FIND_ONE)
  async formFindOneByID(data: FormFindOneInput): Promise<FormWire> {
    const matchingRole = await this.formRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return formEntityToFormWire(matchingRole);
  }
}
