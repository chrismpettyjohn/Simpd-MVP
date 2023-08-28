import {NotificationWire} from '@simpd/lib-client';
import {NotificationEntity} from './notification.entity';

export function notificationEntityToNotificationWire(
  notificationEntity: NotificationEntity
): NotificationWire {
  return {
    id: notificationEntity.id!,
    profileID: notificationEntity.profileID,
    resourceID: notificationEntity.resourceID,
    resourceType: notificationEntity.resourceType,
    content: notificationEntity.eventKey,
    readAt: notificationEntity.readAt?.toDateString(),
    createdAt: notificationEntity.createdAt!.toDateString(),
    updatedAt: notificationEntity.updatedAt?.toDateString(),
  };
}
