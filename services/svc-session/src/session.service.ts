import {addTime} from '@simpd/lib-api';
import {JwtService} from '@nestjs/jwt';
import {SessionContents} from '@simpd/lib-api';
import {SessionRepository} from './session.repository';
import {DEFAULT_SESSION_LENGTH} from './session.const';
import {
  ProfileClientService,
  RoleClientService,
  UserClientService,
} from '@simpd/lib-client';
import {
  InternalServerErrorException,
  NotFoundException,
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class SessionService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly sessionRepo: SessionRepository,
    private readonly userClientService: UserClientService,
    private readonly roleClientService: RoleClientService,
    private readonly profileClientService: ProfileClientService
  ) {}

  async createNewSession(
    email: string,
    password: string,
    profileID?: number
  ): Promise<SessionContents> {
    const currentTime = new Date();
    const expiresAt = addTime(currentTime, DEFAULT_SESSION_LENGTH);

    const user = await this.userClientService.findOne({email});

    if (!user) {
      throw new NotFoundException(`User ${email} does not exist`);
    }

    const matchingPassword = await this.userClientService.passwordComparison({
      id: user.id,
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

    const selectedProfileID = profileID ?? user?.favoriteProfileID;

    if (!selectedProfileID) {
      throw new BadRequestException();
    }

    const matchingProfile = await this.profileClientService.findOne({
      id: selectedProfileID,
    });

    if (matchingProfile.userID !== user.id) {
      throw new UnauthorizedException();
    }

    const newSession = await this.sessionRepo.create({
      userID: user.id,
      profileID: matchingProfile.id,
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
