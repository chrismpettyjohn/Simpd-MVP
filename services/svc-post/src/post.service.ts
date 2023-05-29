import {Injectable} from '@nestjs/common';
import {TagClientService, TagWire} from '@simpd/lib-client';

@Injectable()
export class PostService {
  constructor(private readonly tagClientService: TagClientService) {}

  async fetchOrCreateHashtagsFromText(text: string): Promise<number[]> {
    console.log('test');
    const hashtags = text
      .split(' ')
      .filter(_ => _.startsWith('#'))
      .map(_ => _.replace('#', '').trim().toLowerCase());

    console.log(hashtags);

    const matchingHashtags: TagWire[] = await this.tagClientService.findMany({
      names: hashtags,
    });

    const missingHashtags = hashtags.filter(
      _ => !matchingHashtags.find(mh => mh.name === _)
    );

    const newHashtags = await Promise.all(
      missingHashtags.map(_ =>
        this.tagClientService.createOne({name: _, description: ''})
      )
    );

    return [...matchingHashtags, ...newHashtags].map(_ => _.id);
  }
}
