import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';
import { CommonModule } from '../common/common.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { databaseEntities, databaseRepositories } from './database.const';
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASS,
  DATABASE_USER,
  GRAPHQL_PLAYGROUND,
} from '../simpd.constant';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DATABASE_HOST,
      username: DATABASE_USER,
      password: DATABASE_PASS,
      database: DATABASE_NAME,
      entities: [...databaseEntities],
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: GRAPHQL_PLAYGROUND,
      autoSchemaFile: resolve(__dirname, './schema.gql'),
      fieldResolverEnhancers: ['guards'],
      installSubscriptionHandlers: true,
      resolvers: { JSONObject: GraphQLJSONObject },
    }),
    TypeOrmModule.forFeature([...databaseEntities])]
  ,
  providers: [...databaseRepositories],
  exports: [...databaseRepositories, TypeOrmModule],
})
export class DatabaseModule { }
