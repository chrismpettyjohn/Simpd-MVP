import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {NotificationCreateOneInput} from './notification.input';
import {NotificationRepository} from './notification.repository';
import {notificationEntityToNotificationWire} from './notification.wire';
import {
  NotificationFindOneInput,
  NotificationWire,
  SVC_NOTIFICATION_INTERNAL_EVENT_CREATE_ONE,
  SVC_NOTIFICATION_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class NotificationController {
  constructor(private readonly notificationRepo: NotificationRepository) {}

  @MessagePattern(SVC_NOTIFICATION_INTERNAL_EVENT_FIND_ONE)
  async notificationFind(
    data: NotificationFindOneInput
  ): Promise<NotificationWire> {
    const matchingRole = await this.notificationRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return notificationEntityToNotificationWire(matchingRole);
  }

  @MessagePattern(SVC_NOTIFICATION_INTERNAL_EVENT_CREATE_ONE)
  async notificationCreateOne(
    input: NotificationCreateOneInput<any>
  ): Promise<NotificationWire> {
    const newNotification = await this.notificationRepo.create(input);
    return notificationEntityToNotificationWire(newNotification);
  }
}
