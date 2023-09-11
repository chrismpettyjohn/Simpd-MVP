import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  NotificationCreateOneInput,
  NotificationTypes,
  NotificationFindOneInput,
  NotificationWire,
  NotificationEvent,
} from './notification-client.types';
import {
  SVC_NOTIFICATION_INTERNAL_EVENT_CREATE_ONE,
  SVC_NOTIFICATION_INTERNAL_EVENT_FIND_ONE,
  SVC_NOTIFICATION_NAME,
} from './notification.const';

@Injectable()
export class NotificationClientService {
  constructor(@Inject(SVC_NOTIFICATION_NAME) private client: ClientProxy) {}

  async findOne<EventMetadata extends any>(
    input: NotificationFindOneInput
  ): Promise<NotificationWire<EventMetadata>> {
    const matchingNotification$ = this.client.send(
      SVC_NOTIFICATION_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingNotification$);
  }

  async createOne<Event extends NotificationEvent>(
    input: NotificationCreateOneInput<Event>
  ): Promise<NotificationWire<Event>> {
    const createdNotification$ = await this.client.send(
      SVC_NOTIFICATION_INTERNAL_EVENT_CREATE_ONE,
      input
    );
    return await lastValueFrom(createdNotification$);
  }
}
