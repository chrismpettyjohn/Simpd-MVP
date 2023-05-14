import React from 'react';
import { Switch, Route } from 'wouter';
import { SignInScreen } from './sign-in/SignIn';
import { MessagesScreen } from './messages/Messages';
import { DashboardScreen } from './dashboard/Dashboard';
import { FavoritesScreen } from './favorites/Favorites';
import { UserProfileScreen } from './user-profile/UserProfile';
import { PageNotFoundScreen } from './page-not-found/PageNotFound';
import { NotificationsScreen } from './notifications/Notifications';
import { CreateAccountScreen } from './create-account/CreateAccount';
import { SettingsProfileScreen } from './settings-profile/SettingsProfile';
import { SettingsSecurityScreen } from './settings-security/SettingsSecurty';
import { SettingsProfileCreatorScreen } from './settings-profile-creator/SettingsProfileCreator';
import { SignOutScreen } from './sign-out/SignOut';

const SITE_ROUTES: Array<{ path: string, view: any, }> = [
  {
    path: '/sign-in',
    view: SignInScreen,
  },
  {
    path: '/create-account',
    view: CreateAccountScreen,
  },
  {
    path: '/sign-out',
    view: SignOutScreen,
  },
  {
    path: '/dashboard',
    view: DashboardScreen,
  },
  {
    path: '/favorites',
    view: FavoritesScreen,
  },

  {
    path: '/messages',
    view: MessagesScreen,
  },
  {
    path: '/notifications',
    view: NotificationsScreen,
  },
  {
    path: '/settings/profile',
    view: SettingsProfileScreen,
  },
  {
    path: '/settings/profile/create',
    view: SettingsProfileCreatorScreen,
  },
  {
    path: '/settings/security',
    view: SettingsSecurityScreen,
  },
  {
    path: '/profiles/:username',
    view: UserProfileScreen,
  },
]

export function Router() {
  return (
    <Switch>
      <>
        {
          SITE_ROUTES.map(route => (
            <Route key={`route_${route.path}`} path={route.path} component={route.view} />
          ))
        }
      </>
      <Route component={PageNotFoundScreen} />
    </Switch>
  )
}