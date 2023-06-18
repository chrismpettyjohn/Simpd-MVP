import {Module} from '@nestjs/common';
import {StripeModule} from '@simpd/lib-stripe';
import {UserEventController} from './user-event.controller';
import {ProfileClientModule, UserClientModule} from '@simpd/lib-client';
import {ProfileUserBridgeService} from './profile-user-bridge.service';

@Module({
  imports: [StripeModule, UserClientModule, ProfileClientModule],
  providers: [ProfileUserBridgeService],
  controllers: [UserEventController],
})
export class ProfileUserBridgeModule {}
