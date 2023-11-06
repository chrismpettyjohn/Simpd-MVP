import { toast } from 'react-toastify';
import React, { useContext, useEffect, useState } from 'react';
import { PostCard } from '../../components/post-card/PostCard';
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserContainer } from '../../components/user-container/UserContainer';
import { PostFragment, sessionContext, usePostFetchMany } from '@simpd/lib-web';
import { CreateNewPostCard } from '../../components/create-new-post-card/CreateNewPostCard';

export function DashboardScreen() {
  const postFetchMany = usePostFetchMany();
  const { session } = useContext(sessionContext);
  const [posts, setPosts] = useState<PostFragment[]>([]);

  const onFetchPosts = async () => {
    const posts = await postFetchMany.fetch({ profileIDs: [session!.profileID] });
    setPosts(posts);
  }

  const onAddPost = (newPost: PostFragment) => {
    setPosts(_ => [newPost, ..._]);
    toast.success('🥳 Your post was created!');
  }

  useEffect(() => {
    onFetchPosts();
  }, []);

  return (
    <UserContainer>
      <PageTitle title="Dashboard">
        <input
          type="text"
          placeholder="Find your favorite content"
          className="dashboard-textinput input"
        />
      </PageTitle>
      <CreateNewPostCard onCreate={onAddPost} />
      {
        postFetchMany.loading && (
          <>
            <i className="fa fa-spinner fa-spin" style={{ marginRight: 4 }} />
            Loading Posts...
          </>
        )
      }
      {
        posts.map(_ => (
          <div key={`timeline_post_${_.id}`} style={{ marginBottom: 10 }}>
            <PostCard post={_} />
          </div>
        ))
      }
    </UserContainer>
  )
}
