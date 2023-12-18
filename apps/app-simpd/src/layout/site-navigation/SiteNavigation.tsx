import React from 'react';
import { Link, useLocation } from 'wouter';
import { useSiteNavigation } from './use-site-navigation.hook';

export function SiteNavigation() {
  const [path] = useLocation();
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
            <li className={_.href === path ? 'active' : ''}>
              {_.label}
            </li>
          </Link>
        )
      })
      }
    </ul>
  )
}