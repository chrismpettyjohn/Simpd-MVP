import React from 'react';
import { Switch, Route } from 'wouter';
import { MessagesScreen } from './messages/Messages';
import { DashboardScreen } from './dashboard/Dashboard';
import { FavoritesScreen } from './favorites/Favorites';
import { UserProfileScreen } from './user-profile/UserProfile';
import { PageNotFoundScreen } from './page-not-found/PageNotFound';
import { NotificationsScreen } from './notifications/Notifications';
import { SettingsProfileScreen } from './settings-profile/SettingsProfile';
import { SignInScreen } from './sign-in/SignIn';
import { CreateAccountScreen } from './create-account/CreateAccount';

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