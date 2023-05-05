import {Controller} from '@nestjs/common';
import {MediaRepository} from './media.repository';
import {mediaEntityToMediaWire} from './media.wire';
import {MessagePattern} from '@nestjs/microservices';
import {
  MediaFindOneInput,
  MediaWire,
  SVC_MEDIA_INTERNAL_EVENT_FIND_ONE_BY_ID,
} from '@simpd/lib-client';

@Controller()
export class MediaInternalController {
  constructor(private readonly mediaRepo: MediaRepository) {}

  @MessagePattern(SVC_MEDIA_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async mediaFindOneByID(data: MediaFindOneInput): Promise<MediaWire> {
    const matchingRole = await this.mediaRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return mediaEntityToMediaWire(matchingRole);
  }
}
