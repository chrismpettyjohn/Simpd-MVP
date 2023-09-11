import {NotificationWire} from '@simpd/lib-client';
import {NotificationEntity} from './notification.entity';

export function notificationEntityToNotificationWire<EventMetadata extends any>(
  notificationEntity: NotificationEntity
): NotificationWire<EventMetadata> {
  return {
    id: notificationEntity.id!,
    profileID: notificationEntity.profileID,
    resourceID: notificationEntity.resourceID,
    resourceType: notificationEntity.resourceType,
    content: notificationEntity.eventKey,
    eventMetadata: notificationEntity.eventMetadata as any,
    readAt: notificationEntity.readAt?.toDateString(),
    createdAt: notificationEntity.createdAt!.toDateString(),
    updatedAt: notificationEntity.updatedAt?.toDateString(),
  };
}
