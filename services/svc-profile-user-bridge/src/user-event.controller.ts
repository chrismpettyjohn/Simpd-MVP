import {Controller} from '@nestjs/common';
import {EventPattern} from '@nestjs/microservices';
import {
  UserWire,
  SVC_USER_INTERNAL_EVENT_USER_CREATED,
} from '@simpd/lib-client';
import {ProfileUserBridgeService} from './profile-user-bridge.service';
@Controller()
export class UserEventController {
  constructor(
    private readonly profileUserBridgeService: ProfileUserBridgeService
  ) {}

  @EventPattern(SVC_USER_INTERNAL_EVENT_USER_CREATED)
  async handleUserCreated(data: UserWire) {
    await this.profileUserBridgeService.onUserCreated(data);
  }
}
