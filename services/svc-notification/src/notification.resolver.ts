import {In} from 'typeorm';
import {NotificationModel} from './notification.model';
import {NotificationEntity} from './notification.entity';
import {NotificationRepository} from './notification.repository';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  NotificationCreateInput,
  NotificationFilterByManyInput,
  NotificationFilterByOneInput,
} from './notification.input';
import {ProfileModel} from '@simpd/lib-client';

@Resolver(() => NotificationModel)
export class NotificationResolver {
  constructor(private readonly notificationRepo: NotificationRepository) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<NotificationEntity> {
    return this.notification({id: reference.id});
  }

  @ResolveField(() => ProfileModel)
  sendingProfile(@Parent() notification: NotificationModel): ProfileModel {
    return {
      id: notification.sendingProfileID!,
    };
  }

  @ResolveField(() => ProfileModel)
  receivingProfile(@Parent() notification: NotificationModel): ProfileModel {
    return {
      id: notification.receivingProfileID!,
    };
  }

  @Query(() => NotificationModel)
  async notification(
    @Args('filter') filter: NotificationFilterByOneInput
  ): Promise<NotificationEntity> {
    return this.notificationRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [NotificationModel])
  notifications(
    @Args('filter')
    filter: NotificationFilterByManyInput
  ): Promise<NotificationEntity[]> {
    return this.notificationRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        receivingProfileID: filter.receivingProfileID,
      },
    });
  }

  @Mutation(() => NotificationModel)
  @HasSession()
  async notificationCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: NotificationCreateInput
  ): Promise<NotificationEntity> {
    const newNotification = await this.notificationRepo.create({
      sendingProfileID: session.profileID,
      receivingProfileID: input.receivingProfileID,
      content: input.content,
    });
    return newNotification;
  }

  @Mutation(() => Boolean)
  async notificationDelete(
    @Args('filter') filter: NotificationFilterByOneInput
  ) {
    await this.notificationRepo.softDelete(filter);
    return true;
  }
}
