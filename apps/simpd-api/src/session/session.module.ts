import {Module} from '@nestjs/common';
import {AWSModule} from '../aws/aws.module';
import {SessionService} from './session.service';
import {CommonModule} from '../common/common.module';
import {SessionController} from './session.controller';
import {BearerTokenService} from './bearer-token.service';
import {ActivityModule} from '../activity/activity.module';
import {DatabaseModule} from '../database/database.module';
import {BearerTokenStrategy} from './bearer-token.strategy';
import {PermissionScopeGuard} from './permission-scope.guard';

@Module({
  imports: [CommonModule, DatabaseModule, ActivityModule, AWSModule],
  providers: [
    BearerTokenStrategy,
    PermissionScopeGuard,
    SessionService,
    BearerTokenService,
  ],
  exports: [
    BearerTokenStrategy,
    PermissionScopeGuard,
    SessionService,
    BearerTokenService,
  ],
  controllers: [SessionController],
})
export class SessionModule {}
