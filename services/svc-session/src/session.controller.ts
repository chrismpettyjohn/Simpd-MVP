import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {SessionRepository} from './session.repository';
import {sessionEntityToSessionWire} from './session.wire';
import {
  SVC_SESSION_INTERNAL_EVENT_FIND_ONE_BY_ID,
  SessionFindOneInput,
  SessionWire,
} from '@simpd/lib-client';

@Controller()
export class SessionController {
  constructor(private readonly sessionRepo: SessionRepository) {}

  @MessagePattern(SVC_SESSION_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async findOneByID(data: SessionFindOneInput): Promise<SessionWire> {
    const matchingRole = await this.sessionRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return sessionEntityToSessionWire(matchingRole);
  }
}
