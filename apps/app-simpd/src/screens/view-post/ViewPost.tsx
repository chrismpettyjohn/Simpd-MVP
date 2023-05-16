import React from 'react'
import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet'
import { Card } from 'components/card/Card';
import { PageTitle } from 'components/page-title/PageTitle';
import { CardAccordion } from 'components/card-accordion/CardAccordion';

export function ViewPostScreen() {
  const [, params] = useRoute<{ id: string }>('/posts/:id');
  const postID = Number(params!.id);

  return (
    <>
      <Helmet>
        <title>View Post - Simpd</title>
        <meta property="og:title" content="View Post - Simpd" />
      </Helmet>
      <PageTitle title="View Post" />
      <CardAccordion defaultIsOpen header="Post">
        <h1>{postID}</h1>
      </CardAccordion>
      <CardAccordion header="Comments">
        Coming soon
      </CardAccordion>
    </>
  )
}
