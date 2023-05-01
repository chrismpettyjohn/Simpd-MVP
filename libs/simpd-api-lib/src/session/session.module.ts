import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {HasSessionGuard} from './has-session.guard';
import {SessionClientModule} from '@simpd/client-lib';
import {JWT_EXPIRES, JWT_SECRET} from './session.const';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: JWT_EXPIRES,
      },
    }),
    SessionClientModule,
  ],
  providers: [HasSessionGuard],
  exports: [HasSessionGuard, JwtModule, SessionClientModule],
})
export class SessionModule {}
