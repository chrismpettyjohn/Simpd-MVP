import {Controller} from '@nestjs/common';
import {GrpcMethod} from '@nestjs/microservices';
import {SessionRepository} from './session.repository';
import {sessionEntityToSessionWire} from './session.wire';
import {
  Session,
  SessionFindOneInput,
  SESSION_SERVICE_NAME,
} from '@simpd/proto-lib';

@Controller()
export class SessionController {
  constructor(private readonly sessionRepo: SessionRepository) {}

  @GrpcMethod(SESSION_SERVICE_NAME, 'FindOne')
  async findOne(data: SessionFindOneInput): Promise<Session> {
    const matchingRole = await this.sessionRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return sessionEntityToSessionWire(matchingRole);
  }
}
