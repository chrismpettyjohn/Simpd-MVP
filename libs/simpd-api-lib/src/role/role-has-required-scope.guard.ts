import {Reflector} from '@nestjs/core';
import {RoleScopesWire} from '@simpd/client-lib';
import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {
  getRequestFromExecutionContext,
  RequestWithSession,
} from '@simpd/api-lib';

@Injectable()
export class RoleHasRequiredScopeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredScope: keyof RoleScopesWire = this.reflector.get(
      'scope',
      context.getHandler()
    );
    const request: RequestWithSession = getRequestFromExecutionContext(
      context
    ) as RequestWithSession;

    return !!request.session.scopes[requiredScope];
  }
}
