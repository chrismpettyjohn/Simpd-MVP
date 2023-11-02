import React from 'react';
import { Link } from 'wouter';
import { SITE_NAVIGATION_LINKS } from './SiteNavigation.const';

export function SiteNavigation() {
  return (
    <ul>
      {SITE_NAVIGATION_LINKS.map((_, index) => (
        <Link key={`site_nav_link_${_.href}_${index}`} to={_.href}>
          <li >

            {_.label}
          </li>
        </Link>
      ))
      }
    </ul>
  )
}