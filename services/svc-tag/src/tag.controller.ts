import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {TagRepository} from './tag.repository';
import {tagEntityToTagWire} from './tag.wire';
import {
  TagFindOneInput,
  TagWire,
  SVC_TAG_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class TagController {
  constructor(private readonly tagRepo: TagRepository) {}

  @MessagePattern(SVC_TAG_INTERNAL_EVENT_FIND_ONE)
  async tagFindOneByID(data: TagFindOneInput): Promise<TagWire> {
    const matchingTag = await this.tagRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return tagEntityToTagWire(matchingTag);
  }
}
