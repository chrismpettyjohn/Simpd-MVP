import { sessionContext } from "@simpd/lib-web";
import React, { useContext, useMemo, ReactNode } from "react";

export type NavigationLink = { type: 'link'; label: ReactNode; href: string };
export type NavigationBreak = { type: 'break'; };
export type NavigationBlock = NavigationLink | NavigationBreak;

export function useSiteNavigation(): NavigationBlock[] {
  const { session } = useContext(sessionContext);
  const navBlocks = useMemo(() => {
    return [
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-home" style={{ marginRight: 8 }} />
            Home
          </>
        ),
        href: '/dashboard',
      },
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-bell" style={{ marginRight: 8 }} />
            Notifications
          </>
        ),
        href: '/notifications',
      },
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-comments-alt" style={{ marginRight: 8 }} />
            Messages
          </>
        ),
        href: '/messages',
      },
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-images" style={{ marginRight: 8 }} />
            Albums
          </>
        ),
        href: '/albums',
      },
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-heart" style={{ marginRight: 8 }} />
            Transactions
          </>
        ),
        href: '/transactions',
      },
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-images" style={{ marginRight: 8 }} />
            Collections
          </>
        ),
        href: '/collections',
      },
      {
        type: 'break',
      },
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-chart-bar" style={{ marginRight: 8 }} />
            Insights
          </>
        ),
        href: '/insights',
      },
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-clock" style={{ marginRight: 8 }} />
            Scheduled
          </>
        ),
        href: '/scheduled',
      },
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-edit" style={{ marginRight: 8 }} />
            Drafts
          </>
        ),
        href: '/drafts',
      },
      {
        type: 'break',
      },
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-user-alt" style={{ marginRight: 8 }} />
            My Profile
          </>
        ),
        href: `/profiles/${session?.profile?.username}`,
      },
      {
        type: 'link',
        label: (
          <>
            <i className="fa fa-cog" style={{ marginRight: 8 }} />
            Settings
          </>
        ),
        href: '/settings/identity',
      }
    ]
  }, [session])

  return navBlocks;
}