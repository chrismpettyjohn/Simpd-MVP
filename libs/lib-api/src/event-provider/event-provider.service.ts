import {lastValueFrom} from 'rxjs';
import {ClientProxy} from '@nestjs/microservices';

export class EventProviderService<Events extends object> {
  constructor(private readonly messagingClient: ClientProxy) {}

  async broadcast<M extends keyof Events>(message: M, data: Events[M]) {
    const response$ = this.messagingClient.emit(message, data);
    return await lastValueFrom(response$);
  }
}
