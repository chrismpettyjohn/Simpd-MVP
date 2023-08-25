import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  NotificationFindOneInput,
  NotificationWire,
} from './notification-client.types';
import {
  SVC_NOTIFICATION_INTERNAL_EVENT_FIND_ONE,
  SVC_NOTIFICATION_NAME,
} from './notification.const';

@Injectable()
export class NotificationClientService {
  constructor(@Inject(SVC_NOTIFICATION_NAME) private client: ClientProxy) {}

  async findOne(input: NotificationFindOneInput): Promise<NotificationWire> {
    const matchingNotification$ = this.client.send(
      SVC_NOTIFICATION_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingNotification$);
  }
}
