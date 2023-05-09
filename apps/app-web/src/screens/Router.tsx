import React from 'react';
import { Switch, Route } from 'wouter';
import { MessagesScreen } from './messages/Messages';
import { DashboardScreen } from './dashboard/Dashboard';
import { FavoritesScreen } from './favorites/Favorites';
import { UserProfileScreen } from './user-profile/UserProfile';
import { LandingPageScreen } from './landing-page/LandingPage';
import { PageNotFoundScreen } from './page-not-found/PageNotFound';
import { NotificationsScreen } from './notifications/Notifications';
import { SettingsProfileScreen } from './settings-profile/SettingsProfile';

const SITE_ROUTES: Array<{ path: string, view: any, }> = [
  {
    path: '/',
    view: LandingPageScreen,
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