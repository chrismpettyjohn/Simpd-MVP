import React from 'react';
import { Switch, Route } from 'wouter';
import { SignInScreen } from './sign-in/SignIn';
import { SignUpScreen } from './sign-up/SignUp';
import { LandingScreen } from './landing/Landing';
import { ViewTagScreen } from './view-tag/ViewTag';
import { SignOutScreen } from './sign-out/SignOut';
import { MessagesScreen } from './messages/Messages';
import { ViewPostScreen } from './view-post/ViewPost';
import { GuestGuard, UserGuard } from '@simpd/lib-web';
import { DashboardScreen } from './dashboard/Dashboard';

import { UserProfileScreen } from './user-profile/UserProfile';
import { PageNotFoundScreen } from './page-not-found/PageNotFound';
import { NotificationsScreen } from './notifications/Notifications';
import { MessageThreadScreen } from './message-thread/MessageThread';
import { SettingsPaymentScreen } from './settings-payment/SettingsPayment';
import { SettingsProfileScreen } from './settings-profile/SettingsProfile';
import { DiscoverProfilesScreen } from './discover-profiles/DiscoverProfiles';
import { SettingsSecurityScreen } from './settings-security/SettingsSecurty';
import { SettingsIdentityScreen } from './settings-identity/SettingsIdentity';
import { UserProfileSubscriptionsScreen } from './user-profile-subscriptions/UserProfileSubscriptions';
import { PostCreateScreen } from './post-create/PostCreate';
import { AlbumListScreen } from './/album-list/AlbumList';
import { TransactionListScreen } from './transaction-list/TransactionList';
import { InsightsDashboardScreen } from './insights-dashboard/InsightsDashboard';
import { ScheduledContentScreen } from './scheduled-content/ScheduledContentScreen';
import { DraftsListScreen } from './drafts-list/DraftsList';
import { VideoCallScreen } from 'screens/video-call/VideoCall';
import { AlbumContentScreen } from 'screens/album-content/AlbumContent';
import { BookmarkCollectionListScreen } from 'screens/bookmark-collection-list/BookmarkCollectionList';
import { BookmarkCollectionViewScreen } from 'screens/bookmark-collection-view/BookmarkCollectionView';

const SITE_ROUTES: Array<{ path: string, view: any, }> = [
  {
    path: '/',
    view: (
      <GuestGuard redirect>
        <LandingScreen />
      </GuestGuard>
    ),
  },
  {
    path: '/sign-in',
    view: (
      <GuestGuard redirect>
        <SignInScreen />
      </GuestGuard>
    ),
  },
  {
    path: '/sign-up',
    view: (
      <GuestGuard redirect>
        <SignUpScreen />
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
    path: '/discover',
    view: (
      <UserGuard redirect>
        <DiscoverProfilesScreen />
      </UserGuard>
    )
  },
  {
    path: '/albums',
    view: (
      <UserGuard redirect>
        <AlbumListScreen />
      </UserGuard>
    ),
  },
  {
    path: '/albums/:albumID',
    view: (
      <UserGuard redirect>
        <AlbumContentScreen />
      </UserGuard>
    )
  },
  {
    path: '/favorites',
    view: (
      <UserGuard redirect>
        <BookmarkCollectionListScreen />
      </UserGuard>
    ),
  },
  {
    path: '/favorites/:favoriteID',
    view: (
      <UserGuard redirect>
        <BookmarkCollectionViewScreen />
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
    path: '/messages/threads/:username',
    view: (
      <UserGuard redirect>
        <MessageThreadScreen />
      </UserGuard>
    )
  },
  {
    path: '/video-call/:username',
    view: (
      <UserGuard redirect>
        <VideoCallScreen />
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
    path: '/settings/payment',
    view: (
      <UserGuard redirect>
        <SettingsPaymentScreen />
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
    path: '/transactions',
    view: (
      <UserGuard redirect>
        <TransactionListScreen />
      </UserGuard>
    ),
  },
  {
    path: '/insights',
    view: (
      <UserGuard redirect>
        <InsightsDashboardScreen />
      </UserGuard>
    )
  },
  {
    path: '/scheduled',
    view: (
      <UserGuard redirect>
        <ScheduledContentScreen />
      </UserGuard>
    )
  },
  {
    path: '/drafts',
    view: (
      <UserGuard redirect>
        <DraftsListScreen />
      </UserGuard>
    )
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
    path: '/profiles/:username/subscriptions',
    view: (
      <UserGuard redirect>
        <UserProfileSubscriptionsScreen />
      </UserGuard>
    ),
  },
  {
    path: '/posts/create',
    view: (
      <UserGuard redirect>
        <PostCreateScreen />
      </UserGuard>
    )
  },
  {
    path: '/posts/:id',
    view: (
      <UserGuard redirect>
        <ViewPostScreen />
      </UserGuard>
    )
  },
  {
    path: '/tags/:name',
    view: (
      <UserGuard redirect>
        <ViewTagScreen />
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