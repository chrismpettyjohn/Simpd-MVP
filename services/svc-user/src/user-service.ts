import {Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class UserService {
  canAccessUser(authenticatedUserID: number, requestedUserID: number) {
    if (authenticatedUserID !== requestedUserID) {
      throw new UnauthorizedException();
    }
  }
}
