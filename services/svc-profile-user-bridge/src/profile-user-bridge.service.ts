import RandomWords from 'random-words';
import {Injectable} from '@nestjs/common';
import {ProfileClientService, UserWire} from '@simpd/lib-client';

@Injectable()
export class ProfileUserBridgeService {
  constructor(private readonly profileClientService: ProfileClientService) {}

  async onUserCreated(user: UserWire): Promise<void> {
    const words = RandomWords(3);
    const username = words.join('-');
    const displayName = username.toUpperCase();
    await this.profileClientService.create({
      userID: user.id,
      username,
      displayName,
      biography: '',
      location: '',
      websiteURL: '',
      subscriptionGroupIDs: [],
    });
  }
}
