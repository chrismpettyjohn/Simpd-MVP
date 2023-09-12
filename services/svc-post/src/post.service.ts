import {Injectable} from '@nestjs/common';
import {PostRepository} from './post.repository';
import {PostClientService, TagClientService, TagWire} from '@simpd/lib-client';

@Injectable()
export class PostService {
  constructor(
    private readonly tagClientService: TagClientService,
    private readonly postRepo: PostRepository<any, any>,
    private readonly postClientService: PostClientService
  ) {}

  async fetchOrCreateHashtagsFromText(text: string): Promise<number[]> {
    const hashtags = text
      .split(' ')
      .filter(_ => _.startsWith('#'))
      .map(_ => _.replace('#', '').trim().toLowerCase());

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

  async create(input: any): Promise<any> {
    const newPost = await this.postRepo.create(input);
    await this.postClientService._onCreated({postID: newPost.id!});
    return newPost as any;
  }
}
