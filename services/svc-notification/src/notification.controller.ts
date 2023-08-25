import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {NotificationRepository} from './notification.repository';
import {notificationEntityToNotificationWire} from './notification.wire';
import {
  NotificationFindOneInput,
  NotificationWire,
  SVC_NOTIFICATION_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class NotificationController {
  constructor(private readonly notificationRepo: NotificationRepository) {}

  @MessagePattern(SVC_NOTIFICATION_INTERNAL_EVENT_FIND_ONE)
  async notificationFindOneByID(
    data: NotificationFindOneInput
  ): Promise<NotificationWire> {
    const matchingRole = await this.notificationRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return notificationEntityToNotificationWire(matchingRole);
  }
}
