import React, { useContext, useEffect } from 'react';
import { PostCard } from '../../components/post-card/PostCard';
import { sessionContext, usePostFetchMany } from '@simpd/lib-web';
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserContainer } from '../../layout/user-container/UserContainer';

export function DashboardScreen() {
  const postFetchMany = usePostFetchMany();
  const { session } = useContext(sessionContext);

  useEffect(() => {
    postFetchMany.fetch({ profileIDs: [session!.profileID] });
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
      {
        postFetchMany.loading && (
          <>
            <i className="fa fa-spinner fa-spin" style={{ marginRight: 4 }} />
            Loading Posts...
          </>
        )
      }
      {
        postFetchMany.data?.map(_ => (
          <div key={`timeline_post_${_.id}`} style={{ marginBottom: 10 }}>
            <PostCard post={_} />
          </div>
        ))
      }
    </UserContainer>
  )
}
