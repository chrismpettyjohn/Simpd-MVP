import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {IntrospectAndCompose} from '@apollo/gateway';
import {ApolloGatewayDriver, ApolloGatewayDriverConfig} from '@nestjs/apollo';
import {
  ROLE_SERVICE_NAME,
  ROLE_SERVICE_WEB_ADDRESS,
  SESSION_SERVICE_NAME,
  SESSION_SERVICE_WEB_SERVER_ADDRESS,
  USER_SERVICE_NAME,
  USER_SERVICE_WEB_SERVER_ADDRESS,
} from '@simpd/client-lib';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {name: USER_SERVICE_NAME, url: USER_SERVICE_WEB_SERVER_ADDRESS},
            {name: ROLE_SERVICE_NAME, url: ROLE_SERVICE_WEB_ADDRESS},
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
