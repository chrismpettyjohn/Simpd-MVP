import { resolve } from "path";
import { GraphQLOptions } from "./graphql.types";
import { GRAPHQL_PLAYGROUND } from "./graphql.const";
import { DynamicModule, Module } from "@nestjs/common";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';

@Module({})
export class GraphQLModule {
  static forRoot(options: GraphQLOptions): DynamicModule {
    return {
      module: GraphQLModule,
      imports: [
        NestGraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: resolve(__dirname, './schema.gql'),
          fieldResolverEnhancers: ['guards', ...options.fieldResolverEnhancers ?? []],
          playground: GRAPHQL_PLAYGROUND,
          ...options,
        }),
      ],
      exports: [
        NestGraphQLModule
      ]
    }
  }
}