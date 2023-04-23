import {PostWire} from '@simpd/types';
import {PostService} from '../post/post.service';
import {Controller, Get, Param} from '@nestjs/common';
import {GetSession} from '../session/get-session.decorator';
import {HasSession} from '../session/has-session.decorator';
import {SessionEntity} from '../database/session/session.entity';
import {PostRepository} from '../database/post/post.repository';
import {ProfileEntity} from '../database/profile/profile.entity';
import {ProfileByUsernamePipe} from '../profile/profile-by-username.pipe';

@Controller('profiles/:username/posts')
@HasSession()
export class ProfilePostController {
  constructor(
    private readonly postRepo: PostRepository,
    private readonly postService: PostService
  ) {}

  @Get()
  async getPostsByProfile(
    @Param('username', ProfileByUsernamePipe) profile: ProfileEntity,
    @GetSession() session: SessionEntity
  ): Promise<PostWire[]> {
    const availablePosts: PostWire[] = [];

    const allPosts = await this.postRepo.find(
      {profileID: profile.id!},
      {createdAt: 'DESC'}
    );

    for (const post of allPosts) {
      const userCanAccessPost = this.postService.userCanAccessPost(
        post,
        session.userID,
        false
      );

      if (!userCanAccessPost) {
        continue;
      }

      const postWire = await this.postService.getWireForPost(post);
      availablePosts.push(postWire);
    }

    return availablePosts;
  }
}
