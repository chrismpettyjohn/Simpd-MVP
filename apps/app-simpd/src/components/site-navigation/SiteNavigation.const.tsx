import React, { ReactNode } from "react";

export const SITE_NAVIGATION_LINKS: Array<{ label: ReactNode, href: string }> = [
  {
    label: (
      <>
        <i className="fa fa-home" style={{ marginRight: 8 }} />
        Home
      </>
    ),
    href: '/home',
  },
  {
    label: (
      <>
        <i className="fa fa-bell" style={{ marginRight: 8 }} />
        Notifications
      </>
    ),
    href: '/notifications',
  },
  {
    label: (
      <>
        <i className="fa fa-comments-alt" style={{ marginRight: 8 }} />
        Messages
      </>
    ),
    href: '/messages',
  },
  {
    label: (
      <>
        <i className="fa fa-images" style={{ marginRight: 8 }} />
        Albums
      </>
    ),
    href: '/albums',
  },
  {
    label: (
      <>
        <i className="fa fa-heart" style={{ marginRight: 8 }} />
        Transactions
      </>
    ),
    href: '/transactions',
  },
  {
    label: (
      <>
        <i className="fa fa-images" style={{ marginRight: 8 }} />
        Collections
      </>
    ),
    href: '/collections',
  },
  {
    label: (
      <>
        <i className="fa fa-chart-bar" style={{ marginRight: 8 }} />
        Insights
      </>
    ),
    href: '/insights',
  },
  {
    label: (
      <>
        <i className="fa fa-clock" style={{ marginRight: 8 }} />
        Scheduled
      </>
    ),
    href: '/scheduled',
  },
  {
    label: (
      <>
        <i className="fa fa-edit" style={{ marginRight: 8 }} />
        Drafts
      </>
    ),
    href: '/drafts',
  },
  {
    label: (
      <>
        <i className="fa fa-user-alt" style={{ marginRight: 8 }} />
        My Profile
      </>
    ),
    href: '/profile',
  },
  {
    label: (
      <>
        <i className="fa fa-cog" style={{ marginRight: 8 }} />
        Settings
      </>
    ),
    href: '/settings',
  }
]