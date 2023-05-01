import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {SessionRepository} from './session.repository';
import {sessionEntityToSessionWire} from './session.wire';
import {SessionFindOneInput, SessionWire} from '@simpd/client-lib';

@Controller()
export class SessionController {
  constructor(private readonly sessionRepo: SessionRepository) {}

  @MessagePattern('sessionFindOneByID')
  async findOneByID(data: SessionFindOneInput): Promise<SessionWire> {
    const matchingRole = await this.sessionRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return sessionEntityToSessionWire(matchingRole);
  }
}
