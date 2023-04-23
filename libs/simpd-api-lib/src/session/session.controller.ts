import {SessionService} from './session.service';
import {AWSS3Service} from '../aws/aws-s3.service';
import {HasSession} from './has-session.decorator';
import {GetSession} from './get-session.decorator';
import {sessionWire} from '../database/session/session.wire';
import {ActivityService} from '../activity/activity.service';
import {ProfileEntity} from '../database/profile/profile.entity';
import {SessionEntity} from '../database/session/session.entity';
import {ProfileByUsernamePipe} from '../profile/profile-by-username.pipe';
import {
  ActivityResource,
  CreateSessionDTO,
  ErrorCode,
  SessionWire,
} from '@simpd/types';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UnauthorizedException,
} from '@nestjs/common';

@Controller('session')
export class SessionController {
  constructor(
    private readonly sessionService: SessionService,
    private readonly activityService: ActivityService,
    private readonly awsS3Service: AWSS3Service
  ) {}

  @Post()
  async createSession(@Body() createSessionDTO: CreateSessionDTO) {
    // TODO: Implement support for IP_ADDRESS, GEO_LOCATION, OPERATING_SYSTEM
    const newSession = await this.sessionService.loginWithEmailAndPassword(
      createSessionDTO.email,
      createSessionDTO.password,
      '',
      '',
      ''
    );

    await this.activityService.recordAction(
      newSession.userID,
      newSession.id!,
      newSession.id!,
      ActivityResource.Session,
      'Session created'
    );

    return this.sessionService.convertSessionToJWT(newSession);
  }

  @Post(':username')
  @HasSession()
  async switchActiveProfile(
    @Param('username', ProfileByUsernamePipe) profile: ProfileEntity,
    @GetSession() session: SessionEntity
  ): Promise<string> {
    if (profile.userID !== session.userID) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }

    // TODO: Implement support for IP_ADDRESS, GEO_LOCATION, OPERATING_SYSTEM
    const newSession =
      await this.sessionService.loginAsUserAndProfileWithoutAuthentication(
        profile.userID,
        profile.id!,
        '',
        '',
        ''
      );
    return this.sessionService.convertSessionToJWT(newSession);
  }

  @Get()
  @HasSession()
  async getSession(@GetSession() session: SessionEntity): Promise<SessionWire> {
    const profilePictureURLs = await Promise.all(
      session.user!.profiles!.map(_ => {
        if (!_.profilePicture) {
          return undefined;
        }

        return this.awsS3Service.getObjectURL(_.profilePicture.s3Key);
      })
    );

    const coverPictureURLs = await Promise.all(
      session.user!.profiles!.map(_ => {
        if (!_.coverPicture) {
          return undefined;
        }

        return this.awsS3Service.getObjectURL(_.coverPicture.s3Key);
      })
    );
    return sessionWire(
      session,
      session.profileID,
      profilePictureURLs,
      coverPictureURLs
    );
  }
}
