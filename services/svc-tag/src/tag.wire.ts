import {TagWire} from '@simpd/lib-client';
import {TagEntity} from './tag.entity';

export function tagEntityToTagWire(tagEntity: TagEntity): TagWire {
  return {
    id: tagEntity.id!,
    name: tagEntity.name,
    description: tagEntity.description,
  };
}
