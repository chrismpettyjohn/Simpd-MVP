import {In} from 'typeorm';
import {TagCreateInput} from './tag.input';
import {Controller} from '@nestjs/common';
import {tagEntityToTagWire} from './tag.wire';
import {TagRepository} from './tag.repository';
import {MessagePattern} from '@nestjs/microservices';
import {
  TagFindOneInput,
  TagWire,
  SVC_TAG_INTERNAL_EVENT_FIND_ONE,
  SVC_TAG_INTERNAL_EVENT_FIND_MANY,
  SVC_TAG_INTERNAL_EVENT_CREATE_ONE,
  TagFindManyInput,
} from '@simpd/lib-client';

@Controller()
export class TagController {
  constructor(private readonly tagRepo: TagRepository) {}

  @MessagePattern(SVC_TAG_INTERNAL_EVENT_FIND_ONE)
  async tagFindOne(filter: TagFindOneInput): Promise<TagWire> {
    const matchingTag = await this.tagRepo.findOneOrFail({
      where: {
        id: filter.id,
        name: filter.names,
      },
    });
    return tagEntityToTagWire(matchingTag);
  }

  @MessagePattern(SVC_TAG_INTERNAL_EVENT_FIND_MANY)
  async tagfindMany(filter: TagFindManyInput): Promise<TagWire[]> {
    const matchingTags = await this.tagRepo.find({
      where: {
        name: filter.names && In(filter.names),
      },
    });
    return matchingTags.map(tagEntityToTagWire);
  }

  @MessagePattern(SVC_TAG_INTERNAL_EVENT_CREATE_ONE)
  async tagCreateOne(input: TagCreateInput): Promise<TagWire> {
    const matchingTag = await this.tagRepo.create(input);
    return tagEntityToTagWire(matchingTag);
  }
}
