import { PostEntity } from "./post/post.entity";
import { RoleEntity } from "./role/role.entity";
import { UserEntity } from "./user/user.entity";
import { MediaEntity } from "./media/media.entity";
import { UserRepository } from "./user/user.repository";
import { PostRepository } from "./post/post.repository";
import { RoleRepository } from "./role/role.repository";
import { SessionEntity } from "./session/session.entity";
import { ProfileEntity } from "./profile/profile.entity";
import { PostVoteEntity } from "./post/post-vote.entity";
import { MediaRepository } from "./media/media.repository";
import { PostChoiceEntity } from "./post/post-choice.entity";
import { ProfileRepository } from "./profile/profile.repository";
import { SessionRepository } from "./session/session.repository";
import { PostVoteRepository } from "./post/post-vote.repository";
import { PostReactionEntity } from "./post/post-reaction.entity";
import { PostMediaRepository } from "./post/post-media.repository";
import { PostChoiceRepository } from "./post/post-choice.repository";
import { LanguageEntity } from "./internationalization/language.entity";
import { PostReactionRepository } from "./post/post-reaction.repository";
import { LanguageRepository } from "./internationalization/language.repository";
import { LanguagePhraseEntity } from "./internationalization/language-phrase.entity";
import { LanguagePhraseRepository } from "./internationalization/language-phrase.repository";
import { LanguagePhraseTranslationEntity } from "./internationalization/language-phrase-translation.entity";
import { LanguagePhraseTranslationRepository } from "./internationalization/language-phrase-translation.repository";

export const databaseEntities = [
  LanguageEntity,
  MediaEntity,
  PostEntity,
  PostReactionEntity,
  PostChoiceEntity,
  PostVoteEntity,
  PostVoteEntity,
  ProfileEntity,
  RoleEntity,
  SessionEntity,
  UserEntity,
  LanguagePhraseEntity,
  LanguagePhraseTranslationEntity,
];

export const databaseRepositories = [
  ProfileRepository,
  PostRepository,
  PostReactionRepository,
  PostChoiceRepository,
  PostMediaRepository,
  PostVoteRepository,
  MediaRepository,
  LanguageRepository,
  SessionRepository,
  UserRepository,
  RoleRepository,
  LanguagePhraseRepository,
  LanguagePhraseTranslationRepository,
];
