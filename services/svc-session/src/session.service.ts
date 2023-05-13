import {addTime} from '@simpd/lib-api';
import {JwtService} from '@nestjs/jwt';
import {SessionContents} from '@simpd/lib-api';
import {SessionRepository} from './session.repository';
import {DEFAULT_SESSION_LENGTH} from './session.const';
import {RoleClientService, UserClientService} from '@simpd/lib-client';
import {
  InternalServerErrorException,
  NotFoundException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class SessionService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly sessionRepo: SessionRepository,
    private readonly userClientService: UserClientService,
    private readonly roleClientService: RoleClientService
  ) {}

  async createNewSession(
    userID: number,
    password: string
  ): Promise<SessionContents> {
    const currentTime = new Date();
    const expiresAt = addTime(currentTime, DEFAULT_SESSION_LENGTH);

    const user = await this.userClientService.findOne({id: userID});

    if (!user) {
      throw new NotFoundException(`User ${userID} does not exist`);
    }

    const matchingPassword = await this.userClientService.passwordComparison({
      id: userID,
      password,
    });

    if (!matchingPassword.matching) {
      throw new UnauthorizedException();
    }

    const userRole = await this.roleClientService.findOne({
      id: user.roleID,
    });

    if (!userRole) {
      throw new InternalServerErrorException(
        `User Role ${user.roleID} is missing`
      );
    }

    const newSession = await this.sessionRepo.create({
      userID,
      expiresAt,
    });

    return {
      userID: newSession.userID,
      profileID: 1, // TODO
      sessionID: newSession.id!,
      expiresAt: +newSession.expiresAt,
      scopes: userRole.scopes,
    };
  }

  async generateBearerToken(sessionContents: SessionContents): Promise<string> {
    return await this.jwtService.signAsync(sessionContents);
  }
}
