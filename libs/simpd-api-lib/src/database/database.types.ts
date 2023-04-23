import { Entity } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export type DatabaseModuleOptions = DatabaseModuleCustomOptions & TypeOrmModuleOptions

export interface DatabaseModuleCustomOptions {
  entities: typeof Entity[];
}