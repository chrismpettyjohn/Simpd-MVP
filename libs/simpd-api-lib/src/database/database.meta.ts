import {Provider} from '@nestjs/common';
import {RoleEntity} from './role/role.entity';
import {UserEntity} from './user/user.entity';
import {RoleRepository} from './role/role.repository';
import {UserRepository} from './user/user.repository';
import {SessionEntity} from './session/session.entity';
import {ActivityEntity} from './activity/activity.entity';
import {SessionRepository} from './session/session.repository';
import {ActivityRepository} from './activity/activity.repository';
import {MediaEntity} from './media/media.entity';
import {MediaRepository} from './media/media.repository';
import {ProfileEntity} from './profile/profile.entity';
import {ProfileRepository} from './profile/profile.repository';
import {PostEntity} from './post/post.entity';
import {PostMediaEntity} from './post/post-media.entity';
import {PostChoiceEntity} from './post/post-choice.entity';
import {PostRepository} from './post/post.repository';
import {PostChoiceRepository} from './post/post-choice.repository';
import {PostMediaRepository} from './post/post-media.repository';
import {PostVoteRepository} from './post/post-vote.repository';
import {PostVoteEntity} from './post/post-vote.entity';
import {PostReactionEntity} from './post/post-reaction.entity';
import {PostReactionRepository} from './post/post-reaction.repository';

export const databaseEntities: Function[] = [
  ActivityEntity,
  UserEntity,
  RoleEntity,
  SessionEntity,
  MediaEntity,
  ProfileEntity,
  PostEntity,
  PostMediaEntity,
  PostChoiceEntity,
  PostVoteEntity,
  PostReactionEntity,
];

export const databaseProviders: Provider[] = [
  ActivityRepository,
  UserRepository,
  RoleRepository,
  SessionRepository,
  MediaRepository,
  ProfileRepository,
  PostRepository,
  PostMediaRepository,
  PostChoiceRepository,
  PostVoteRepository,
  PostReactionRepository,
];
