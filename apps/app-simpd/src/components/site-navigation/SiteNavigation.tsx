import React from 'react';
import { Link } from 'wouter';
import { SITE_NAVIGATION_LINKS } from './SiteNavigation.const';

export function SiteNavigation() {
  return (
    <ul>
      {SITE_NAVIGATION_LINKS.map((_, index) => {
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