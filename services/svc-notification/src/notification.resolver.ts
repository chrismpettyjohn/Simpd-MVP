import {In} from 'typeorm';
import {NotificationModel} from './notification.model';
import {NotificationEntity} from './notification.entity';
import {NotificationRepository} from './notification.repository';
import {
  Args,
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
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
        profileID: filter.receivingProfileID,
      },
    });
  }
}
