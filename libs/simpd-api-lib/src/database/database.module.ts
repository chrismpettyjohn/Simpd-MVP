import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule, Module } from "@nestjs/common";
import { DatabaseModuleOptions } from "./database.types";

@Module({})
export class DatabaseModule {
  static forRoot({ host, username, password, database, ssl, entities }: DatabaseModuleOptions): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          ssl,
          host,
          username,
          password,
          database,
          entities: [...entities],
          synchronize: false,
        }),
      ]
    }
  }
}