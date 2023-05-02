import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {IntrospectAndCompose} from '@apollo/gateway';
import {
  SVC_PROFILE_NAME,
  SVC_PROFILE_WEB_ADDRESS,
} from 'libs/lib-client/src/svc-profile/profile.const';
import {AuthenticatedDataSource} from './authenticated-datasource';
import {ApolloGatewayDriver, ApolloGatewayDriverConfig} from '@nestjs/apollo';
import {
  SVC_ROLE_NAME,
  SVC_ROLE_WEB_ADDRESS,
  SVC_SESSION_NAME,
  SVC_SESSION_WEB_ADDRESS,
  SVC_USER_NAME,
  SVC_USER_WEB_ADDRESS,
} from '@simpd/lib-client';
import {
  SVC_POST_NAME,
  SVC_POST_WEB_ADDRESS,
} from 'libs/lib-client/src/svc-post/post.const';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {name: SVC_POST_NAME, url: SVC_POST_WEB_ADDRESS},
            {name: SVC_USER_NAME, url: SVC_USER_WEB_ADDRESS},
            {name: SVC_ROLE_NAME, url: SVC_ROLE_WEB_ADDRESS},
            {name: SVC_PROFILE_NAME, url: SVC_PROFILE_WEB_ADDRESS},
            {name: SVC_SESSION_NAME, url: SVC_SESSION_WEB_ADDRESS},
          ],
        }),
        buildService({name, url}) {
          return new AuthenticatedDataSource({url});
        },
      },
    }),
  ],
})
export class GatewayModule {}
