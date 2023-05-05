import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {TagRepository} from './tag.repository';
import {tagEntityToTagWire} from './tag.wire';
import {
  TagFindOneInput,
  TagWire,
  SVC_PROFILE_INTERNAL_EVENT_FIND_ONE_BY_ID,
} from '@simpd/lib-client';

@Controller()
export class TagController {
  constructor(private readonly tagRepo: TagRepository) {}

  @MessagePattern(SVC_PROFILE_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async tagFindOneByID(data: TagFindOneInput): Promise<TagWire> {
    const matchingRole = await this.tagRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return tagEntityToTagWire(matchingRole);
  }
}