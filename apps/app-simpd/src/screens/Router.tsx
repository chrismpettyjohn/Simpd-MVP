import React from 'react';
import { Switch, Route } from 'wouter';
import { SignInScreen } from './sign-in/SignIn';
import { SignOutScreen } from './sign-out/SignOut';
import { MessagesScreen } from './messages/Messages';
import { ViewPostScreen } from './view-post/ViewPost';
import { GuestGuard, UserGuard } from '@simpd/lib-web';
import { DashboardScreen } from './dashboard/Dashboard';
import { FavoritesScreen } from './favorites/Favorites';
import { UserProfileScreen } from './user-profile/UserProfile';
import { PageNotFoundScreen } from './page-not-found/PageNotFound';
import { NotificationsScreen } from './notifications/Notifications';
import { CreateAccountScreen } from './create-account/CreateAccount';
import { SettingsProfileScreen } from './settings-profile/SettingsProfile';
import { SettingsSecurityScreen } from './settings-security/SettingsSecurty';
import { SettingsIdentityScreen } from './settings-identity/SettingsIdentity';

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
    path: '/favorites',
    view: (
      <UserGuard redirect>
        <FavoritesScreen />
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
  }
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