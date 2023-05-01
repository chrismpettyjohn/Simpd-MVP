import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {IntrospectAndCompose} from '@apollo/gateway';
import {ApolloGatewayDriver, ApolloGatewayDriverConfig} from '@nestjs/apollo';
import {
  SVC_ROLE_NAME,
  SVC_ROLE_WEB_ADDRESS,
  SESSION_SERVICE_NAME,
  SESSION_SERVICE_WEB_SERVER_ADDRESS,
  SVC_USER_NAME,
  SVC_USER_WEB_SERVER_ADDRESS,
} from '@simpd/client-lib';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {name: SVC_USER_NAME, url: SVC_USER_WEB_SERVER_ADDRESS},
            {name: SVC_ROLE_NAME, url: SVC_ROLE_WEB_ADDRESS},
            {
              name: SESSION_SERVICE_NAME,
              url: SESSION_SERVICE_WEB_SERVER_ADDRESS,
            },
          ],
        }),
      },
    }),
  ],
})
export class GatewayModule {}
