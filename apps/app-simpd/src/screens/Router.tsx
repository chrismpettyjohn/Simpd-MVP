import React from 'react';
import { Switch, Route } from 'wouter';
import { SignInScreen } from './sign-in/SignIn';
import { SignOutScreen } from './sign-out/SignOut';
import { MessagesScreen } from './messages/Messages';
import { ViewPostScreen } from './view-post/ViewPost';
import { GuestGuard, UserGuard } from '@simpd/lib-web';
import { DashboardScreen } from './dashboard/Dashboard';
import { UserProfileScreen } from './user-profile/UserProfile';
import { PageNotFoundScreen } from './page-not-found/PageNotFound';
import { NotificationsScreen } from './notifications/Notifications';
import { CreateAccountScreen } from './create-account/CreateAccount';
import { MessageThreadScreen } from './message-thread/MessageThread';
import { ViewBookmarksScreen } from './view-bookmarks/ViewBookmarks';
import { ListBookmarksScreen } from './list-bookmarks/ListBookmarks';
import { SettingsProfileScreen } from './settings-profile/SettingsProfile';
import { SettingsSecurityScreen } from './settings-security/SettingsSecurty';
import { SettingsIdentityScreen } from './settings-identity/SettingsIdentity';
import { MessageStartThreadScreen } from './message-start-thread/MessageStartThread';

const SITE_ROUTES: Array<{ path: string, view: any, }> = [
  {
    path: '/sign-in',
    view: (
      <GuestGuard redirect>
        <SignInScreen />
      </GuestGuard>
    ),
  },
  {
    path: '/create-account',
    view: (
      <GuestGuard redirect>
        <CreateAccountScreen />
      </GuestGuard>
    ),
  },
  {
    path: '/sign-out',
    view: (
      <UserGuard redirect>
        <SignOutScreen />
      </UserGuard>
    ),
  },
  {
    path: '/dashboard',
    view: (
      <UserGuard redirect>
        <DashboardScreen />
      </UserGuard>
    ),
  },
  {
    path: '/bookmarks',
    view: (
      <UserGuard redirect>
        <ListBookmarksScreen />
      </UserGuard>
    ),
  },
  {
    path: '/bookmarks/:bookmarkCollectionID',
    view: (
      <UserGuard redirect>
        <ViewBookmarksScreen />
      </UserGuard>
    ),
  },
  {
    path: '/messages',
    view: (
      <UserGuard redirect>
        <MessagesScreen />
      </UserGuard>
    ),
  },
  {
    path: '/messages/create',
    view: (
      <UserGuard redirect>
        <MessageStartThreadScreen />
      </UserGuard>
    )
  },
  {
    path: '/messages/threads/:username',
    view: (
      <UserGuard redirect>
        <MessageThreadScreen />
      </UserGuard>
    )
  },
  {
    path: '/notifications',
    view: (
      <UserGuard redirect>
        <NotificationsScreen />
      </UserGuard>
    ),
  },
  {
    path: '/settings/identity',
    view: (
      <UserGuard redirect>
        <SettingsIdentityScreen />
      </UserGuard>
    ),
  },
  {
    path: '/settings/profile',
    view: (
      <UserGuard redirect>
        <SettingsProfileScreen />
      </UserGuard>
    ),
  },
  {
    path: '/settings/security',
    view: (
      <UserGuard redirect>
        <SettingsSecurityScreen />
      </UserGuard>
    ),
  },
  {
    path: '/profiles/:username',
    view: (
      <UserGuard redirect>
        <UserProfileScreen />
      </UserGuard>
    ),
  },
  {
    path: '/posts/:id',
    view: (
      <UserGuard redirect>
        <ViewPostScreen />
      </UserGuard>
    )
  },
]

export function Router() {
  return (
    <Switch>
      <>
        {
          SITE_ROUTES.map(route => (
            <Route key={`route_${route.path}`} path={route.path}>{route.view}</Route>
          ))
        }
      </>
      <Route component={PageNotFoundScreen} />
    </Switch>
  )
}