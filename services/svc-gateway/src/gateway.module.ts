import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {IntrospectAndCompose} from '@apollo/gateway';
import {AuthenticatedDataSource} from './authenticated-datasource';
import {ApolloGatewayDriver, ApolloGatewayDriverConfig} from '@nestjs/apollo';
import {
  SVC_MEDIA_NAME,
  SVC_MEDIA_WEB_ADDRESS,
} from 'libs/lib-client/src/svc-media/media.const';
import {
  SVC_PROFILE_NAME,
  SVC_PROFILE_WEB_ADDRESS,
} from 'libs/lib-client/src/svc-profile/profile.const';
import {
  SVC_POST_NAME,
  SVC_POST_WEB_ADDRESS,
} from 'libs/lib-client/src/svc-post/post.const';
import {
  SVC_COMMENT_NAME,
  SVC_COMMENT_WEB_ADDRESS,
  SVC_REACTION_NAME,
  SVC_REACTION_WEB_ADDRESS,
  SVC_REPORT_NAME,
  SVC_REPORT_WEB_ADDRESS,
  SVC_ROLE_NAME,
  SVC_ROLE_WEB_ADDRESS,
  SVC_SESSION_NAME,
  SVC_SESSION_WEB_ADDRESS,
  SVC_TAG_NAME,
  SVC_TAG_WEB_ADDRESS,
  SVC_USER_NAME,
  SVC_USER_WEB_ADDRESS,
} from '@simpd/lib-client';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {name: SVC_COMMENT_NAME, url: SVC_COMMENT_WEB_ADDRESS},
            {name: SVC_POST_NAME, url: SVC_POST_WEB_ADDRESS},
            {name: SVC_USER_NAME, url: SVC_USER_WEB_ADDRESS},
            {name: SVC_ROLE_NAME, url: SVC_ROLE_WEB_ADDRESS},
            {name: SVC_MEDIA_NAME, url: SVC_MEDIA_WEB_ADDRESS},
            {name: SVC_PROFILE_NAME, url: SVC_PROFILE_WEB_ADDRESS},
            {name: SVC_REACTION_NAME, url: SVC_REACTION_WEB_ADDRESS},
            {name: SVC_REPORT_NAME, url: SVC_REPORT_WEB_ADDRESS},
            {name: SVC_SESSION_NAME, url: SVC_SESSION_WEB_ADDRESS},
            {name: SVC_TAG_NAME, url: SVC_TAG_WEB_ADDRESS},
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
