import React from 'react';
import { Link } from 'wouter';
import { useSiteNavigation } from './use-site-navigation.hook';

export function SiteNavigation() {
  const siteNavBlocks = useSiteNavigation();
  return (
    <ul>
      {siteNavBlocks.map((_, index) => {
        const key = `site_nav_link_${index}`;
        if (_.type === 'break') {
          return <hr key={key} />
        }
        return (
          <Link key={key} to={_.href}>
            <li >

              {_.label}
            </li>
          </Link>
        )
      })
      }
    </ul>
  )
}