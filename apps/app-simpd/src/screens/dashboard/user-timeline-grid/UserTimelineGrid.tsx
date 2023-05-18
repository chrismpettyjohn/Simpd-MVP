import React, { useContext, useEffect } from 'react';
import { PostCard } from 'components/post-card/PostCard';
import { sessionContext, usePostFetchMany } from '@simpd/lib-web';

export function UserTimelineGrid() {
  const postFetchMany = usePostFetchMany();
  const { session } = useContext(sessionContext);

  useEffect(() => {
    postFetchMany.fetch({ profileIDs: [session!.profileID] });
  }, []);

  if (postFetchMany.loading) {
    return (
      <>
        <i className="fa fa-spinner fa-spin" style={{ marginRight: 4 }} />
        Loading Posts...
      </>
    )
  }

  return (
    <>
      {
        postFetchMany.data?.map(_ => (
          <PostCard key={`timeline_post_${_.id}`} />
        ))
      }
    </>
  )
}