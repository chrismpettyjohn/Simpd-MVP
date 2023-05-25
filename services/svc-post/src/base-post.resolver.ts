import {PostBaseModel} from './post.model';
import {PostRepository} from './post.repository';
import {Parent, ResolveField, Resolver} from '@nestjs/graphql';

@Resolver(() => PostBaseModel)
export class BasePostResolver {
  constructor(private readonly postRepo: PostRepository<any, any>) {}

  @ResolveField(() => Number, {nullable: true})
  async totalShares(@Parent() post: PostBaseModel): Promise<number> {
    console.log('test');
    const shares = await this.postRepo
      .getInstance()
      .query(
        'SELECT COUNT(*) FROM posts.posts WHERE posts.post_data.postID = :0',
        [post.id]
      );
    console.log(shares);
    return shares;
  }
}
